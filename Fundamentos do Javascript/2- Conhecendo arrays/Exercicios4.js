//Ex1
const meuArray = ['a', 'b', 'c', 'd', 'e'];
meuArray.forEach((elemento, indice) => {
  console.log(`Exercicio 1: Índice: ${indice}, Valor: ${elemento}`);
});

//Ex2
function executaOperacaoEmArray(array, funcaoCallback) {
    return array.map(funcaoCallback); // Executa a função de callback em cada elemento do array
}
function dobraNumero(num) {
    return num * 2; // Função de exemplo para dobrar o número
}
const listaNumeros = [1, 2, 3];
const listaNumerosDobrados = executaOperacaoEmArray(listaNumeros, dobraNumero);
console.log('Exercico 2: ', listaNumerosDobrados); // Saída: [2, 4, 6]

//Ex3
const numeros = [10, 20, 30, 40, 50];
const numeroProcurado = 30;
let posicao = -1;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === numeroProcurado) {
    posicao = i;
    break;
  }
}
console.log(`Exercicio 3: Posição do número ${numeroProcurado}: ${posicao}`);

//Ex4
const nomesTurmaA = ['João Silva','Maria Santos','Pedro Almeida'];
const nomesTurmaB = ['Carlos Oliveira','Ana Souza','Lucas Fernandes'];
const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
const nomeAluno = todasAsTurmas.find(nome => nome === 'Ana Souza');
if (todasAsTurmas.includes(nomeAluno)) {
  console.log(`Exercicio 4: Aluno encontrado: ${nomeAluno}`);
} else {
  console.log('Exercicio 4: Aluno não encontrado');
}

//Ex5
const numeros5 = [6, 9, 12, 15, 18, 21];
let multiplicacao = 3;
numeros5.forEach(numero => {
  const resultado = numero * 3;
  console.log(`Exercicio 5: Os elementos do array multiplicados por 3: --> ${resultado}`);
});
const indiceNumero18 = numeros5.indexOf(18);
console.log('Exercicio 5: O indice do número 18 no array original: ', indiceNumero18);
