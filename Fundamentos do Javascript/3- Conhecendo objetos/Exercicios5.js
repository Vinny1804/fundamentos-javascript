//Ex3
console.log('Exercicio 3:');
const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
}
const stringProduto = JSON.stringify(produto);
console.log(stringProduto);
console.log(typeof stringProduto);

//Ex5
console.log('\nExercicio 5:');
// Função para copiar objetos JSON
function copiarObjetoJson(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}
// Criação do objeto original (pessoa)
const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
};
// Utiliza a função para criar uma cópia do objeto original
const pessoaModificada = copiarObjetoJson(pessoaOriginal);

// Modifica a cópia do objeto (pessoa modificada)
pessoaModificada.idade = 31;

// Imprime no console ambos os objetos
console.log("Objeto Original (Pessoa):");
console.log(pessoaOriginal);

console.log("Objeto Modificado (Pessoa):");
console.log(pessoaModificada)
