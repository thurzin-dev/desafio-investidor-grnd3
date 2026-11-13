// Modelo de valuation da Grendene. Mesmas fórmulas da Planilha_Valuation_GRND3.xlsx.
// Valores em R$ milhões.
(function (root) {
  const BASE = {
    // 2025 real (CVM, DFP consolidada)
    receita2025: 2584.341,
    giro2025: 1038.252 + 483.533 - 56.927, // receber + estoques - fornecedores
    plControladora2025: 3153.958,
    plMinoritarios2025: 0,
    dividaBruta: 56.916 + 13.651,
    caixa: 70.158 + 987.916,
    dividendosPagar: 979.985, // declarados em 2025 e pagos em 2026
    acoes: 902.16, // milhões
    // premissas
    crescimento: [0.01, 0.04, 0.04, 0.04, 0.04],
    margemBruta: 0.456,
    margemEbit: 0.14,
    ir: 0.10,
    resFinanceiro: 0.07,
    minoritarios: 0,
    depreciacao: 0.037,
    capexPct: [0.055, 0.055, 0.055, 0.055, 0.055],
    giroPct: 0.60,
    payout: 0.90,
    g: 0.04,
    // taxa de desconto
    jurosReal: 0.0693,
    inflacao: 0.04,
    beta: 0.62,
    premio: 0.05,
    selic: 0.1375,
    irDivida: 0.34,
    cotacao: 3.72,
  };

  function wacc(p) {
    const rf = (1 + p.jurosReal) * (1 + p.inflacao) - 1;
    const ke = rf + p.beta * p.premio;
    const kd = p.selic * (1 - p.irDivida);
    const E = p.cotacao * p.acoes;
    const D = p.dividaBruta;
    const wE = E / (E + D), wD = D / (E + D);
    return { rf, ke, kd, E, D, wE, wD, wacc: wE * ke + wD * kd };
  }

  function irr(fluxos) {
    const npv = (r) => fluxos.reduce((s, f, t) => s + f / Math.pow(1 + r, t), 0);
    let lo = -0.99, hi = 1.0;
    if (npv(lo) * npv(hi) > 0) return null;
    for (let i = 0; i < 200; i++) {
      const mid = (lo + hi) / 2;
      if (npv(lo) * npv(mid) <= 0) hi = mid; else lo = mid;
    }
    return (lo + hi) / 2;
  }

  function projetar(p) {
    const anos = [2026, 2027, 2028, 2029, 2030];
    let receita = p.receita2025, giroAnt = p.giro2025, pl = p.plControladora2025;
    return anos.map((ano, i) => {
      receita = receita * (1 + p.crescimento[i]);
      const cpv = receita * (1 - p.margemBruta);
      const ebit = receita * p.margemEbit;
      const lair = ebit + receita * p.resFinanceiro;
      const lucroCons = lair * (1 - p.ir);
      const lucro = lucroCons * (1 - p.minoritarios);
      const dep = receita * p.depreciacao;
      const capex = receita * p.capexPct[i];
      const giro = receita * p.giroPct;
      const dGiro = giro - giroAnt;
      giroAnt = giro;
      const nopat = ebit * (1 - p.ir);
      const fcff = nopat + dep - capex - dGiro;
      pl = pl + lucro * (1 - p.payout);
      return { ano, receita, cpv, ebit, lucro, dep, capex, dGiro, nopat, fcff, pl,
        roe: lucro / pl, margemLiq: lucro / receita, roi: (receita - cpv) / cpv };
    });
  }

  function avaliar(p, taxaForcada, gForcado) {
    const w = wacc(p);
    const taxa = taxaForcada != null ? taxaForcada : w.wacc;
    const g = gForcado != null ? gForcado : p.g;
    const linhas = projetar(p);
    const fcff = linhas.map((l) => l.fcff);
    const vt = fcff[4] * (1 + g) / (taxa - g);
    // caixa líquido já sem os dividendos declarados que saíram em 2026
    const caixaLiq = p.caixa - p.dividaBruta - p.dividendosPagar;
    const ev = w.E - caixaLiq; // T0
    const fluxos = [-ev, fcff[0], fcff[1], fcff[2], fcff[3], fcff[4] + vt];
    const vpFluxos = fluxos.slice(1).reduce((s, f, i) => s + f / Math.pow(1 + taxa, i + 1), 0);
    const vpl = vpFluxos - ev;
    const valorAcoes = vpFluxos + caixaLiq - p.plMinoritarios2025;
    const precoJusto = valorAcoes / p.acoes;
    const potencial = precoJusto / p.cotacao - 1;
    const recomendacao = potencial > 0.15 ? "COMPRA" : potencial < -0.15 ? "VENDA" : "MANUTENÇÃO";
    // payback simples sem o valor terminal (fluxo crescendo g ao ano depois de 2030)
    const soma5 = fcff.reduce((a, b) => a + b, 0);
    let paybackSimples;
    if (soma5 >= ev) paybackSimples = 5;
    else {
      const falta = ev - soma5, base = fcff[4] * (1 + g);
      paybackSimples = 5 + Math.log(1 + falta * g / base) / Math.log(1 + g);
    }
    return { ...w, taxa, g, linhas, fcff, vt, caixaLiq, ev, fluxos, vpFluxos, vpl, valorAcoes,
      precoJusto, potencial, recomendacao, tir: irr(fluxos), soma5, paybackSimples,
      pagaDescontado: vpFluxos >= ev };
  }

  root.Modelo = { BASE, wacc, projetar, avaliar, irr };
})(typeof window !== "undefined" ? window : globalThis);
