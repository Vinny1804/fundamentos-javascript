const estaAprovado = true;

if (estaAprovado === true) {
    console.log('Aprovado');
}

if ('0' === 0) {   
    console.log('Passou na comparação');
} else {
    console.log('Não passou na comparação');
} 

// Operador ternário
const valor = 50;
const texto = valor < 50 ? 'valor insuficiente' : 'valor suficiente';
console.log(texto); // retorna ‘valor suficiente’

//
let matriculaAtiva = true;

function verificaMatriculaAtiva() {
 if (matriculaAtiva === true) {
   return 'matrícula ativa no sistema';
 } else {
   return 'matrícula não está ativa';
 }
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'

// Mesma lógica acima, mas usando o operador ternário
let matriculaAtiva1 = true;

function verificaMatriculaAtiva1() {
 return matriculaAtiva1 ? 'matrícula ativa no sistema' : 'matrícula não está ativa';
}

console.log(verificaMatriculaAtiva1());
// retorna 'matrícula ativa no sistema'

