const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function pertenceFibonacci(numero) {
  let a = 0;
  let b = 1;

  while (b < numero) {
    let temp = b;
    b = a + b;
    a = temp;
  }

  return b === numero;
}

readline.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (numeroInformado) => {
  // Converte a entrada para um número inteiro
  numeroInformado = parseInt(numeroInformado);

  if (pertenceFibonacci(numeroInformado)) {
    console.log(numeroInformado + " pertence à sequência de Fibonacci.");
  } else {
    console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
  }

  readline.close();
});