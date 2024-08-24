const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares]

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]; // ... vai jogar o 3,4,5 na variável outrosNumeros
//console.log(num1, num2, outrosNumeros); // 1 2 [ 3, 4, 5 ]

const pessoa = {
    nome: 'Ju',
    idade: 25
}

const pessoaComTelefone = {...pessoa, telefone: 123123123};

console.log(pessoa, pessoaComTelefone);

const { idade } = pessoa;
console.log(idade);

function imprimeDados({ nome, idade }) {
    console.log(nome, idade);
}

imprimeDados(pessoa);

