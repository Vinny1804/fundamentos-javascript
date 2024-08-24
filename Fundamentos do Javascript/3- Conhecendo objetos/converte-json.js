const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante); // transformar em strings
// console.log(stringEstudante);
// console.log(typeof stringEstudante);


const objEstudante = JSON.parse(stringEstudante); // transformar em objetos
console.log(objEstudante);
console.log(typeof objEstudante);
console.log(objEstudante.nome);
