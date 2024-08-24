//Ex1
console.log('Exercicio 1:');
const pessoa = {
    nome: 'Marcelo',
    notas: [8, 7, 10],

    calcularMediaNotas: function () {
        const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
        const media = somaNotas / this.notas.length;
        return media.toFixed(2); // Arredondando para duas casas decimais
    },

    classificarDesempenho: function () {
        const media = this.calcularMediaNotas(); // Chama a função para obter a média
        if (media >= 9) {
            return 'Desempenho excelente';
        } else if (media >= 7.5 && media < 9) {
            return 'Bom desempenho';
        } else if (media >= 6 && media < 7.5) {
            return 'Desempenho regular';
        } else {
            return 'Desempenho insuficiente';
        }
    }

};
console.log(`A média foi ${pessoa.calcularMediaNotas()} e foi um ${pessoa.classificarDesempenho()}\n`);
//
console.log('Exercicio 2:');
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "Prata"
};
for (let propriedade in carro) {
    const tipo = typeof carro[propriedade];
    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `A propriedade '${propriedade}' do objeto carro é '${carro[propriedade]}'.`
        console.log(texto);
    }
}
carro.cambio = 'Automático';
carro.kmRodados = 0;
console.log(carro);
console.log("Propriedades atualizadas do carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

//Ex3
console.log('\nExercicio 3:');
const carro2 = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2021,
    cor: "Prata",
    ligado: false,

    ligar: function () {
        if (!this.ligado) {
            return 'O carro foi ligado.'
        } else {
            return 'O carro já está ligado '
        }
    },
    desligar: function () {
        if (this.ligado) {
            return 'O carro foi desligado';
        } else {
            return 'O carro já está desligado'
        }
    },
    obterDetalhes: function () {
        const estado = this.ligado ? 'ligado' : 'desligado';
        return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
    }
};

console.log(carro2.ligar());
console.log(carro2.desligar());
console.log(carro2.obterDetalhes());

//Ex4
console.log('\nExercicio 4:');
carro2.placa = 'ABC1234';
// Defina a propriedade placa como não enumerável
Object.defineProperty(carro, "placa", { enumerable: false });
for (let propriedade in carro2) {
    const tipo = typeof carro2[propriedade];
    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `${propriedade}: ${carro2[propriedade]}`
        console.log(texto);
    }
}
const chavesEnumeraveis = Object.keys(carro2);
console.log(chavesEnumeraveis);
console.log(carro2.placa);

//Ex5
console.log('\nExercicio 5:');
const carroNovo = { ...carro, ...carro2 };
console.log(carroNovo);
carroNovo.modelo = 'Accord'
console.log("Carro com Detalhes Modificados:");
console.log(carroNovo);


