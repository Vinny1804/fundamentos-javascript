//Ex1
function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2); // Concatena os dois arrays
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = concatenateArrays(array1, array2);
console.log(concatenatedArray); // Saída: [1, 2, 3, 4, 5, 6]

//Ex2
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(2,7)
console.log(parteNumeros);

//Ex3
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
frutas.splice(2, 2, 'Kiwi', 'Pêssego');
console.log(frutas);

//Ex4
const menuPrincipal = ['lasanha', 'feijoada', 'macarronada'];
const menuDeSobremesas = ['pudim', 'sorvete', 'brigadeiro'];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log('Veja o menu completo:', menuCompleto );

//Ex5
let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}
console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row)); // visualização em linhas e colunas

//Ex6
console.log('Elemento na segunda linha e terceira coluna:', matriz[1][2]);

//Ex7
matriz[2][1] = 15;
console.log('Matriz após adição de elemento:', matriz);