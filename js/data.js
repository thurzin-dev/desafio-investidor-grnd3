// Textos e números do site. Para mudar um texto, mude aqui.
// Valores em R$ milhões, salvo indicação.

const EMPRESA = { nome: "Grendene", ticker: "GRND3" };

const GRUPO = {
  nomes: "Arthur Pivatto Fachin",
  disciplina: "Adm. Financeira e Orçamentária (AFO)",
  data: "Novembro de 2026",
};

const HISTORICO = {
  anos: ["2023", "2024", "2025"],
  series: {
    receita: { nome: "Receita líquida", valores: [2434, 2629, 2584], cor: "ouro" },
    lucro: { nome: "Lucro líquido", valores: [558, 735, 645], cor: "verde" },
    ebitda: { nome: "EBITDA", valores: [371, 642, 425], cor: "ouro" },
    capex: { nome: "CAPEX", valores: [123, 187, 136], cor: "ouro" },
    divida: { nome: "Dívida bruta", valores: [116, 89, 71], cor: "vermelho" },
    caixa: { nome: "Caixa e aplicações", valores: [884, 1164, 1058], cor: "verde" },
    dividendos: { nome: "Dividendos e JCP pagos", valores: [1251, 369, 557], cor: "ouro" },
  },
  // lucro bruto, para o ROI do histórico
  lucroBruto: [1083.7, 1241.1, 1169.1],
  roe: ["15,2%", "18,2%", "20,4%"],
  margemLiq: ["22,9%", "28,0%", "25,0%"],
  botoes: [
    { id: "receita_lucro", rotulo: "Receita e lucro", series: ["receita", "lucro"] },
    { id: "ebitda", rotulo: "EBITDA", series: ["ebitda"] },
    { id: "caixa_divida", rotulo: "Caixa x dívida", series: ["caixa", "divida"] },
    { id: "dividendos", rotulo: "Dividendos", series: ["dividendos"] },
    { id: "capex", rotulo: "CAPEX", series: ["capex"] },
  ],
  margens: [
    ["Crescimento da receita", "-", "8,0%", "−1,7%", ["Parou", "amarelo"]],
    ["Margem bruta", "44,5%", "47,2%", "45,2%", ["Estável", "verde"]],
    ["Margem EBIT", "11,3%", "21,2%", "12,6%", ["Oscila", "amarelo"]],
    ["Margem líquida", "22,9%", "28,0%", "25,0%", ["Alta", "verde"]],
    ["ROE", "15,2%", "18,2%", "20,4%", ["Subindo", "verde"]],
    ["Caixa líquido (R$ mi)", "767", "1.075", "988", ["980 já é dividendo", "amarelo"]],
  ],
};

const AREAS = [
  ["Melissa", "Calçados de plástico de moda, a marca mais conhecida no exterior"],
  ["Ipanema e Grendha", "Sandálias e chinelos populares, vendidos no Brasil todo"],
  ["Rider e Cartago", "Chinelos e sandálias, com foco no público masculino"],
  ["Grendene Kids", "Calçados infantis, muitos com personagens licenciados"],
];
const EMPRESA_TEXTO = "Fundada em 1971 em Farroupilha (RS), com fábricas no Nordeste. Vende no Brasil e exporta para vários países.";

const POR_QUE = [
  ["Muito caixa e quase nenhuma dívida", ["Sim", "verde"]],
  ["Lucro em todos os anos", ["Sim", "verde"]],
  ["Dados completos na CVM", ["Sim", "verde"]],
  ["Recuperação judicial", ["Não está", "verde"]],
];

const CENARIO = [
  ["Selic", "13,75% ao ano, mantida pelo Copom em 04/11/2026", "Taxa de desconto maior, valor presente menor", ["Risco", "vermelho"]],
  ["Resultado do 3T26", "Receita de R$ 742 mi (queda de 2,4%) e lucro de R$ 122 mi (queda de 12,1%)", "A empresa parou de crescer em 2026", ["Risco", "vermelho"]],
  ["Exportações", "No 3T26 o volume exportado caiu 21,6% e a receita de exportação, 23,4%", "Distribuidores lá fora adiaram pedidos", ["Risco", "vermelho"]],
  ["Dividendos de 2025", "R$ 980 mi declarados no fim de 2025 e pagos em 2026", "Sobra menos caixa rendendo juros: o resultado financeiro caiu 43% no 3T26", ["Atenção", "amarelo"]],
  ["Mercado interno", "Volume no Brasil subiu 3,6% no 3T26, puxado pela Ipanema", "As marcas continuam fortes aqui dentro", ["Oportunidade", "verde"]],
];

const PREMISSAS = [
  ["Crescimento da receita", "1% em 2026, depois 4% ao ano", "2026 quase parado, como no 3T26. Depois, perto da inflação", ["Recente", "azul"]],
  ["Margem bruta", "45,6%", "Média de 2023 a 2025", ["Histórico", "verde"]],
  ["Margem EBIT", "14%", "A média foi 15%, puxada por 2024. Ficamos um pouco abaixo", ["Cautela", "amarelo"]],
  ["Alíquota de IR", "10%", "A média foi uns 7% por incentivo fiscal no Nordeste e JCP", ["Cautela", "amarelo"]],
  ["CAPEX", "5,5% da receita", "Perto da média de 2023 a 2025 (5,8%)", ["Histórico", "verde"]],
  ["Capital de giro", "60% da receita", "Média de 2023 a 2025: muito estoque e venda a prazo", ["Histórico", "verde"]],
  ["Depreciação", "3,7% da receita", "Média de 2023 a 2025", ["Histórico", "verde"]],
  ["Crescimento após 2030 (g)", "4% ao ano", "Empresa madura: cresce com a inflação", ["Economia", "azul"]],
];

const RISCOS = [
  ["Juros caindo mais rápido", "Com taxa de 10% a 12% e crescimento alto, o preço justo passa da cotação", ["Risco da tese", "vermelho"]],
  ["Exportações voltando", "A queda de 2026 pode ser só estoque dos distribuidores, e não falta de demanda", ["Risco da tese", "vermelho"]],
  ["Dividendo alto atrai investidor", "Quem compra pela renda pode aceitar um retorno menor que o nosso", ["Risco da tese", "vermelho"]],
  ["Caixa voltando a crescer", "Se a empresa guardar caixa de novo, os juros desse caixa aumentam o valor", ["Limitação", "amarelo"]],
  ["Premissas cautelosas", "IR de 10% e margem EBIT de 14% reduzem um pouco o valor", ["Limitação", "amarelo"]],
];

const FONTES = [
  ["CVM", "DFP consolidada de 2023 e 2025"],
  ["RI da Grendene", "Resultado do 3T26"],
  ["Tesouro Direto", "Tesouro IPCA+ 2035 (juro real)"],
  ["Banco Central", "Copom (Selic) e boletim Focus"],
  ["Cotação", "R$ 3,72 por ação, perto de 12/11/2026 [conferir no dia]"],
  ["Beta", "0,62, Yahoo Finance, 5 anos [conferir]"],
];

// Itens fixos da faixa de cotações (os do modelo são calculados no main.js)
const FITA_FIXA = [
  ["SELIC", "13,75%", ""],
  ["RECEITA 2025", "R$ 2,58 bi", ""],
  ["LUCRO 2025", "R$ 645 mi", "alta"],
  ["ROE 2025", "20,4%", "alta"],
  ["MARGEM LÍQ. 2025", "25,0%", "alta"],
  ["DIVIDENDOS DECLARADOS 2025", "R$ 980 mi", ""],
  ["RECEITA 3T26", "−2,4%", "baixa"],
  ["IPCA+ 2035", "6,93%", ""],
];

// Notas do apresentador, uma por tela. Aparecem com a tecla N.
const NOTAS = {
  capa: [
    "Boa noite. Meu nome é Arthur, e a empresa que eu escolhi foi a Grendene, código GRND3 na B3.",
    "No trabalho eu faço o papel de analista de um fundo de ações. Olhei os últimos três anos da empresa, projetei o caixa dos próximos cinco anos e, no final, digo se o fundo deveria comprar, manter ou vender a ação.",
    "Já adiantando a conclusão: a Grendene é uma empresa saudável e que paga bons dividendos, mas, no preço de hoje, a ação não está barata.",
  ],
  empresa: [
    "A Grendene é a dona da Melissa, da Ipanema, da Rider, da Grendha e da Grendene Kids. Ela foi fundada em 1971 em Farroupilha, no Rio Grande do Sul, e hoje produz principalmente em fábricas no Nordeste.",
    "Escolhi a Grendene por quatro motivos: ela tem muito caixa e quase nenhuma dívida, deu lucro em todos os anos, os dados estão completos na CVM e ela não está em recuperação judicial.",
    "Se perguntarem: recuperação judicial é quando a empresa pede proteção na Justiça para renegociar dívidas que não consegue pagar. O professor proibiu porque o futuro dessas empresas fica imprevisível.",
  ],
  historico: [
    "Os números vêm do balanço consolidado que a Grendene entrega à CVM, a DFP. Tudo em milhões de reais.",
    "A receita foi de 2,43 bilhões em 2023 para 2,63 em 2024, e caiu um pouco em 2025, para 2,58. Ou seja, a empresa parou de crescer.",
    "O lucro líquido é alto para o tamanho da receita: margem de 25% em 2025. Mas tem um detalhe importante: uma parte grande desse lucro vem dos juros do caixa. Em 2025, o resultado financeiro foi de 353 milhões, mais da metade do lucro de 645 milhões.",
    "A margem EBIT, que é a margem da operação de calçados, oscila: 11% em 2023, 21% em 2024 e 13% em 2025. Em 2025 as despesas de vendas subiram bastante.",
    "No fim de 2025 a Grendene declarou 980 milhões em dividendos, pagos em 2026. Por isso o caixa líquido de 988 milhões, na prática, já era quase todo dos acionistas. O patrimônio caiu, e por isso o ROE subiu para 20%.",
  ],
  cenario: [
    "Aqui é o que acontece fora da empresa e que mexe com a análise.",
    "A Selic está em 13,75% ao ano, mantida pelo Copom em 4 de novembro. Juro alto deixa a taxa de desconto maior e reduz o valor presente da empresa.",
    "No terceiro trimestre de 2026 a receita caiu 2,4% e o lucro caiu 12%. O principal motivo foram as exportações: o volume exportado caiu 21,6%, porque os distribuidores lá fora adiaram pedidos.",
    "O resultado financeiro também caiu, 43%, porque depois dos dividendos sobrou menos caixa rendendo juros. Isso confirma o que eu falei no histórico: parte do lucro vinha do caixa.",
    "O lado bom é o mercado interno: o volume vendido no Brasil subiu 3,6%, puxado pela Ipanema.",
  ],
  premissas: [
    "Essas são as escolhas da projeção. Quando havia um dado recente, usei. Quando não havia, usei a média de 2023 a 2025. Em dois pontos fui mais cauteloso.",
    "Crescimento de 1% em 2026, porque a receita está quase parada no ano. Depois, 4% ao ano, que é mais ou menos a inflação: é uma empresa madura.",
    "Margem EBIT de 14%: a média deu 15%, mas foi puxada por 2024, que teve 21%. Fiquei um pouco abaixo.",
    "Imposto de 10%: a Grendene paga pouco imposto, uns 7% na média, por causa de incentivo fiscal das fábricas no Nordeste e do JCP. Usei 10% caso esse incentivo diminua. (Conferir o incentivo no relatório anual.)",
    "Capital de giro de 60% da receita: calçado tem muito estoque e muita venda a prazo. Quando a receita cresce, esse dinheiro preso cresce junto.",
    "Depois de 2030, crescimento de 4% ao ano para sempre, só a inflação.",
  ],
  wacc: [
    "Essa é a taxa que usei para trazer o caixa futuro para valor de hoje. É também a TMA, o retorno mínimo que vale a pena.",
    "Passo 1: o juro sem risco vem do Tesouro IPCA+ 2035, que paga 6,93% acima da inflação. Com inflação de 4%, dá 11,21%.",
    "Passo 2: o custo do acionista pelo CAPM: 11,21% mais o beta de 0,62 vezes o prêmio de risco de 5%. Dá 14,31%. Beta abaixo de 1 quer dizer que a ação balança menos que a bolsa. Esse beta é do Yahoo Finance, 5 anos, e precisa ser conferido.",
    "Passo 3: o custo da dívida é a Selic de 13,75%, menos 34% de imposto. Dá 9,08%. Mas a dívida da Grendene é minúscula, só 2% do capital.",
    "Resultado: WACC de 14,2% ao ano.",
  ],
  fcff: [
    "FCFF é o fluxo de caixa livre da firma: o dinheiro que sobra da operação depois de pagar imposto e fazer os investimentos.",
    "Clicando em um ano aparece a conta. Lucro operacional depois do imposto, mais a depreciação, menos o investimento (CAPEX) e menos o aumento do capital de giro.",
    "O caixa livre vai de 181 milhões em 2026 para 259 milhões em 2030. Repare que é bem menor que o lucro líquido, que passa de 490 milhões. A diferença é que o lucro inclui os juros do caixa, e o FCFF olha só a operação de calçados.",
    "Em 2026 o FCFF é menor porque o capital de giro aumenta: ele parte de 57% da receita no balanço de 2025 e vai para os 60% da premissa.",
    "Valor terminal é o valor de todos os anos depois de 2030, crescendo 4% ao ano. Pela fórmula de Gordon dá uns 2,6 bilhões em 2030.",
  ],
  indicadores: [
    "Investimento inicial (T0): é o valor da empresa inteira hoje. As ações valem 3,36 bilhões na bolsa. O caixa líquido, tirando os 980 milhões de dividendos que já saíram, é praticamente zero. Então o T0 fica em uns 3,35 bilhões.",
    "Trazendo para hoje todo o caixa futuro, com o valor terminal, chego em 2,14 bilhões. O VPL é negativo: menos 1,2 bilhão.",
    "A TIR dá 2,9% ao ano, bem abaixo da TMA de 14,2%. Pagando o preço de hoje, o retorno seria muito baixo.",
    "Payback simples: só com o caixa projetado, levaria uns 12 anos para o dinheiro voltar. O payback descontado não acontece, porque o valor presente de tudo fica abaixo do preço.",
  ],
  rentabilidade: [
    "ROE é o lucro dividido pelo patrimônio. A Grendene fica entre 15% e 20%, um retorno bom.",
    "Margem líquida de 19% na projeção, contra 25% em 2025, porque o caixa ficou menor e rende menos juros.",
    "ROI pela fórmula do enunciado, receita menos custo dividido pelo custo, dá uns 84%. Na prática é um markup: para cada 1 real de custo, a Grendene vende por 1,84. É uma margem alta, típica de marca forte.",
  ],
  preco: [
    "Pegando o valor da firma pelo fluxo descontado, 2,14 bilhões, e somando o caixa líquido de uns 7 milhões, chego em 2,14 bilhões para as ações. Dividindo pelas 902 milhões de ações, dá 2,38 reais por ação.",
    "Na bolsa a ação está em 3,72 reais. O preço justo está 36% abaixo.",
    "A tabela é a sensibilidade: o preço justo mudando a taxa e o crescimento depois de 2030. Ela mostra que a conclusão depende dos juros. Com taxa de 10% a 12% e crescimento de 4% ou mais, o preço justo passa da cotação. Com a taxa de hoje, não passa.",
    "O gráfico 3D mostra a mesma tabela: as barras que atravessam o plano vermelho são os cenários em que a ação estaria barata.",
  ],
  simulador: [
    "Essa tela é para responder pergunta da banca na hora. As contas são as mesmas da planilha.",
    "Dá para mexer nos juros, no beta, no crescimento, na margem e na cotação, e ver o preço justo mudar.",
    "O quadro de baixo mostra o que o preço de hoje está pressupondo: quanto a Grendene teria que crescer para sempre, ou que retorno o investidor estaria aceitando.",
  ],
  recomendacao: [
    "Minha recomendação é venda.",
    "Primeiro motivo: o preço justo de 2,38 reais está bem abaixo dos 3,72 da bolsa. Segundo: a TIR de 2,9% fica muito abaixo da TMA, e o VPL é negativo. Terceiro: o lucro alto vinha em boa parte dos juros do caixa, e esse caixa já foi distribuído como dividendo.",
    "Dá para defender manutenção para quem compra pela renda dos dividendos e aceita um retorno menor. Mas, pelo modelo, a ação está cara para quem exige 14% ao ano.",
    "Se perguntarem como uma empresa que lucra 25% da receita pode estar cara: porque o lucro da operação de calçados é bem menor que o lucro total, e é a operação que gera caixa no futuro.",
  ],
  riscos: [
    "O que faria a recomendação estar errada: juros caindo mais rápido, as exportações voltando em 2027, ou o investidor aceitando um retorno menor por causa dos dividendos.",
    "E uma limitação do modelo: se a Grendene voltar a guardar caixa, os juros desse caixa aumentam o valor. Também fui cauteloso no imposto e na margem.",
  ],
  fontes: [
    "Os dados históricos vêm da CVM. O resultado do terceiro trimestre de 2026 vem do RI da Grendene. O juro real vem do Tesouro Direto. Selic e inflação vêm do Banco Central.",
    "Antes de apresentar, conferir a cotação do dia e a fonte do beta. A planilha pode ser baixada no botão desta tela.",
    "Obrigado. Fico à disposição para perguntas.",
  ],
};

// Recomendação. Trocar para "MANUTENÇÃO" se decidir assim.
const RECOMENDACAO = {
  palavra: "VENDA",
  frase: "Boa pagadora, mas não está barata.",
  motivos: [
    "Preço justo de R$ 2,38 contra R$ 3,72 na bolsa",
    "TIR de 2,9% contra TMA de 14,2%, e VPL negativo",
    "O lucro alto vinha dos juros do caixa, que virou dividendo",
  ],
};
