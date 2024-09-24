function inverterString(texto) {
  let textoInvertido = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }

  return textoInvertido;
}

let textoOriginal = "Olá Mundo!";
let textoInvertido = inverterString(textoOriginal);

console.log("Texto original:", textoOriginal);
console.log("Texto invertido:", textoInvertido);