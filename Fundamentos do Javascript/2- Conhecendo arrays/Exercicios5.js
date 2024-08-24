//Ex1
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const todosArrays = [...array1, ...array2, ...array3];

console.log('Exercicio 1: ', todosArrays);

// function concatArrays(...arrays) {
//     return [].concat(...arrays); // operador spread para concatenar os arrays
// }
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];
// const arraysConcatenados = concatArrays(arr1, arr2, arr3);
// console.log(arraysConcatenados); // Saída: [1, 2, 3, 4, 5, 6]

//Ex2
const valores = [1, 2, 3, 4, 5];
const soma = valores.reduce((acum, valor) => valor + acum, 0);
console.log('Exercicio 2: ', soma);

//Ex3
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];
const coresUnicas = [...new Set([...coresLista1, ...coresLista2])];
console.log('Exercicio 3: ', coresUnicas);

//Ex4
function filtraNumerosPares(arr) {
    return arr.filter(num => num % 2 === 0); // Filtra apenas os números pares
}
const numArray = [1, 2, 3, 4, 5, 6];
const listaNumerosPares = filtraNumerosPares(numArray);
console.log('Exercicio 4: ', listaNumerosPares); // Saída: [2, 4, 6]

//Ex5
const listaNumeros = [3, 6, 9, 4, 12, 2, 7];
function filtraNumeros(arr) {
    return arr.filter(num => num % 3 === 0 && num > 5); // Filtra números múltiplos de 3 e maiores que 5
}
const numerosFiltrados = filtraNumeros(listaNumeros);
console.log('Exercicio 5: ', numerosFiltrados); // Saída: [6, 9, 12]

//Ex6
function somaElementosDoArray(arr) {
    return arr.reduce((acum, atual) => acum + atual, 0); // Soma os elementos do array
  }
  const listaNumeros6 = [1, 2, 3, 4, 5];
  const somaTotal = somaElementosDoArray(listaNumeros6);
  console.log('Exercicio 6: ', somaTotal); // Saída: 15