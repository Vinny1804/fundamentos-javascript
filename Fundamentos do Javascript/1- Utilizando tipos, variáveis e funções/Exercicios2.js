const frase = "Essa variável contem uma frase."
console.log(frase.length);
console.log(frase);

valor1 = null;
let valor2;
console.log(valor1, valor2);

const numero = 28;
const texto = 'Essa é a minha idade';
const boolean = true;
const combinacao = `${texto} ${numero} ? ${boolean}`;
console.log(combinacao);

const numero1 = 42;
const texto1 = '10';
const numero1Convertido = String(numero);
const texto1Convertido = Number(texto);
console.log('Tipo de dado após conversão de número para string: ', typeof numero1Convertido);
console.log('Tipo de dado após conversão de string para número: ', typeof texto1Convertido);

const texto2 = 'JavaScript é incrível!';

const maiusculas = texto2.toUpperCase();
const minusculas = texto2.toLowerCase();
const parteDaString = texto2.slice(0, 10);

console.log('Texto em maiúsculas:', maiusculas);
console.log('Texto em minúsculas:', minusculas);
console.log('Parte da string:', parteDaString);

