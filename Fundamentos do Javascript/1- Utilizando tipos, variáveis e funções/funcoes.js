// parâmetros/argumentos
// retorno
console.log(exibeInfosEstudante('Caroline', 10));
console.log(exibeInfosEstudante('Ana', 7));

function exibeInfosEstudante(nome, nota) {
  return `O nome é ${nome} e a nota é ${nota}`;
}
// hoisting

// declaração da função
function somarDoisNumeros(numA, numB) {
    return numA + numB;
   }
   
   // execução (ou chamada) da função
   somarDoisNumeros(2, 2);
   
   // atribuindo o retorno de uma função a uma variável
   const resultado = somarDoisNumeros(2, 2);
   console.log(resultado);

// E se a função tiver mais de um bloco de código ?
function dividir(dividendo, divisor) {
    if (divisor !== 0) {
      return dividendo / divisor;
    } else {
      return 'favor não dividir por zero';
    }
   }
   
   const resultado1 = dividir(10, 5);
   console.log(resultado1); // 2
   const resultadoZero = dividir(10, 0);
   console.log(resultadoZero); // 'favor não dividir por zero'
//
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

const mensagem = saudacao("Maria");
console.log(mensagem);
//