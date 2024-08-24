const estudanteReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
} 

// Quando tem apenas uma linha de código (Tirar o return e chaves)
const exibeNome = (nome) => nome;
//

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));
console.log(exibeNome('Caroline'));
//
// Função de calculadora simples
function calculadoraSimples(a, b, operacao) {
    let resultado;
    if (operacao === 'soma') {
        resultado = a + b;
    } else if (operacao === 'subtracao') {
        resultado = a - b;
    } else if (operacao === 'multiplicacao') {
        resultado = a * b;
    } else if (operacao === 'divisao') {
        resultado = a / b;
    } else {
        resultado = 'Operação não reconhecida';
    }
    return resultado;
}

