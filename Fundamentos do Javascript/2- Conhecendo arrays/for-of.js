const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
// O 'for...of' responde a casos em que queremos simplesmente percorrer do primeiro índice do array até o último
for (let nota of notas) {
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;
console.log(`a média das notas é ${media}`);
//for…of em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário 
// o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);



