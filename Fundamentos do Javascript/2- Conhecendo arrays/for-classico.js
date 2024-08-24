const notas = [10, 8.5, 5, 6.5, 8, 7.5];

//Primeira expressão: executada apenas uma vez (let indice = 0) // i = indice
//Segunda expressão: condição de execução (indice < notas.length)
//Terceira expressão: executada sempre ao final do bloco (indice++)

for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);
}

//Exemplos
const numeros = [100, 200, 300, 400, 500, 600];
for (let i = numeros.length - 1; numeros[i] >= 300; i -= 2) {
  console.log(numeros[i]); // 600 400
}

//
const numerosPares = [];
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
console.log(numerosPares); // 0, 2, 4, 6...98, 100
// for para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).