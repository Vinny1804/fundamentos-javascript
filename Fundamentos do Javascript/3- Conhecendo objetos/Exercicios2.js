//Ex1
const pessoa = {
    nome: 'Paulo',
    idade: 35,
    solteiro: true,
    hobbies: ['Jogar', 'Treinar', 'Ler']
};
console.log('Exercicio 1:');
function mostrarInfoPessoa(pessoa) {
    console.log("Informações da Pessoa:");
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} anos (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`);
    if (pessoa.endereco) {
        console.log(`Endereco: ${pessoa.endereco.rua}, Cidade: ${pessoa.endereco.cidade}, Estado: ${pessoa.endereco.estado}`);
    } else {
        console.log('Endereco: Não disponível');
    }
}
mostrarInfoPessoa(pessoa);

//Ex2
pessoa.endereco = {
    rua: 'Rua dos bobos',
    cidade: 'Carapicuiba',
    estado: 'São Paulo'
};
console.log('\nExercicio 2:');
mostrarInfoPessoa(pessoa);

//Ex3
console.log('\nExercicio 3:');
const pessoas = [
    { nome: "João", idade: 30, cidade: "São Paulo" },
    { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "Carlos", idade: 35, cidade: "Belo Horizonte" }];
function mostrarListaPessoas(pessoas) {
    console.log("Lista de Pessoas:");
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    });
}
mostrarListaPessoas(pessoas);
pessoas.push({ nome: "Ana", idade: 28, cidade: "Salvador" });
mostrarListaPessoas(pessoas);

function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}
const pessoasSalvador = filtrarPorCidade(pessoas, "Salvador");
console.log("Pessoas em Salvador:");
console.log(pessoasSalvador);

//Ex4
console.log('\nExercicio 4:');
const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Divisão por zero não é permitida.";
        }
    },
};
calculadora.calcularMedia = function(numeros) {
    const soma = numeros.reduce((total, numero) => total + numero, 0);
    return soma / numeros.length;
}
console.log("Soma: " + calculadora.soma(5, 3));
console.log("Subtração: " + calculadora.subtracao(8, 4));
console.log("Multiplicação: " + calculadora.multiplicacao(6, 2));
console.log("Divisão: " + calculadora.divisao(10, 2));
console.log("Divisão por zero: " + calculadora.divisao(8, 0));

const numerosParaMedia = [10, 8, 6, 9, 7];
console.log("Média: " + calculadora.calcularMedia(numerosParaMedia));

//Ex5
console.log('\nExercicio 5:');
const contaBancaria = {
    titular: 'Marco',
    saldo: 5000,
    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    }
};
const cliente = {
    nome: 'Tobias',
    conta: contaBancaria,
};
function mostrarSaldo(cliente) {
    console.log(`Nome do cliente: ${cliente.nome}`);
    console.log(`Saldo da conta: ${cliente.conta.saldo}`);
};
mostrarSaldo(cliente);
cliente.conta.depositar(1000);
cliente.conta.sacar(500);
mostrarSaldo(cliente);
