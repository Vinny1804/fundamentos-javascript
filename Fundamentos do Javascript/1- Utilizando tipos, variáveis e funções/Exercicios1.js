const nome = "Vinicius";
const numero = 18;
const booleano = true;

console.log(typeof nome);
console.log(typeof numero);
console.log(typeof booleano);

const sobrenome = "Aguiar"
const nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);
console.log('Usando operador +:', nomeCompleto)

// Usando template strings
const nomeCompletoTemplate = `${nome} ${sobrenome}`;
console.log(`Usando template strings: ${nomeCompletoTemplate}`);

const texto = `Meu nome é ${nome}, e faço aniversário no dia ${numero}`;
console.log(texto);

let minhaVariavel = 'Primeiro valor';
console.log(minhaVariavel);

minhaVariavel= 'Novo valor';
console.log(minhaVariavel);


var fora = 'Fora do bloco';

if (true) {
    var dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // retorna 'Dentro do bloco'

const estaChovendo = true;

if (estaChovendo) {
    console.log('É melhor levar um guarda-chuva!');
} else {
    console.log('O tempo está bom, sem necessidade de guarda-chuva.');
}