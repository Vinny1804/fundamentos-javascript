// Ex1
let saldo = 1000;
const deposito = 600;
saldo += deposito;
const saque = 100;
const operacao = saldo - saque;
console.log('O seu saldo é de: ', saldo);
console.log('Novo saldo após o saque ', operacao);

//Ex2
const numero = 3;
const parImpar = numero % 2 === 0 ? 'É um número par' : 'É um número impar';
console.log(parImpar);

//Ex3
const logado = true;
const admin = false;
const resultado = logado && admin;
console.log('Administrador logado no sistema:', resultado); 

//Ex4
const boolean0 = false;
const boolean1 = true;
const resultado1 = boolean0 || boolean1;
console.log(resultado1);

//Ex5
const idadeMin = 18;
const idade = 16;
if (idade >= idadeMin){
    console.log('Você pode comprar o ingresso');
} else {
    console.log('Você não tem idade suficiente para comprar o ingresso');
}