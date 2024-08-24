//Ex1
const notas = [7, 8, 9, 10];
for (let nota of notas) {
    console.log('Exercicio 1', nota); 
}

//Ex2
const notas1 = [7, 8, 9, 10];
for (let i = 0; i < notas.length; i++) {
    console.log('Exercio 2',  i, notas[i]);
}

//Ex3
const listaNumeros = [1, 2, 3, 4, 5];
function soma(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log('Exercicio 3', soma(listaNumeros));

//Ex4
function ex4() {
    let numerosInteiros = [10, 20, -1, 50, 100];
    for (let maior of numerosInteiros) {
        maior = Math.max(...numerosInteiros);
        console.log('Exercicio 4: O maior número é: ', maior);
    }
    for (let menor of numerosInteiros) {
        menor = Math.min(...numerosInteiros);
        console.log('Exercicio 4: O menor número é: ', menor);
        
    }
}
ex4();
//
const arrMenoresMaiores = [5, 37, 18, 59, 12, -5];
function imprimeMaiorEMenor(arr) {
  let maior = 0;
  let menor = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i]
    }
    if (arr[i] < menor) {
      menor = arr[i]
    }
  }
  return `o maior número é ${maior} e o menor número é ${menor}`;
}
console.log(imprimeMaiorEMenor(arrMenoresMaiores));

//Ex5
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
console.log('Números pares do array:');
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log('Exercico 5 ', numeros[i]);
  }
}

//Ex6
const numeros6 = [10, 8, 6, 9, 7, 5];
let soma6 = 0;
for (let i = 0; i < numeros6.length; i++) {
  soma6 += numeros6[i];
}
const media6 = soma6 / numeros6.length;
console.log('Exercicio 6: Array:', numeros6);
console.log('Exercicio 6: Média dos números:', media6);
