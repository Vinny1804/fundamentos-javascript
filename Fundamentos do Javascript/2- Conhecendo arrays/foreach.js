const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota) {
    somaDasNotas += nota;
})

// notas.forEach(somaNotas);
// function somaNotas(nota) {
//     somaDasNotas += nota;
// }

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);


const lista = [1, 2, 3, 4, 5];
let soma = 0;
lista.forEach(numero => soma += numero);
console.log(soma); //15
//forEach() para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada,
// e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc;