const faturamentoDiario = [
  null,
  67836.43,
  null,
  36678.66,
  29229.88,
  null,
  27165.48,
  null,
  null,
  19849.53,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

function analisarFaturamento(faturamento) {
  let menorFaturamento = Infinity;
  let maiorFaturamento = -Infinity;
  let somaFaturamento = 0;
  let diasComFaturamentoAcimaDaMedia = 0;
  let diasComFaturamento = 0;

  faturamento.forEach((faturamentoDiario) => {
    if (faturamentoDiario !== null) {
      diasComFaturamento++;
      somaFaturamento += faturamentoDiario;
      if (faturamentoDiario < menorFaturamento) {
        menorFaturamento = faturamentoDiario;
      }
      if (faturamentoDiario > maiorFaturamento) {
        maiorFaturamento = faturamentoDiario;
      }
    }
  });

  const mediaMensal = somaFaturamento / diasComFaturamento;

  faturamento.forEach((faturamentoDiario) => {
    if (faturamentoDiario !== null && faturamentoDiario > mediaMensal) {
      diasComFaturamentoAcimaDaMedia++;
    }
  });

  console.log("Menor valor de faturamento:", menorFaturamento);
  console.log("Maior valor de faturamento:", maiorFaturamento);
  console.log("Dias com faturamento acima da média:", diasComFaturamentoAcimaDaMedia);
}

analisarFaturamento(faturamentoDiario);