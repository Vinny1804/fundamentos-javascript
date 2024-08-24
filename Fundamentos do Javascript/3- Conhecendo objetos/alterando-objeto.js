const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
};
// Se a propriedade existe, ela é alterada, se não existe ela é criada
estudante.telefone = '5511999999999';
console.log(estudante.telefone);
console.log(estudante);

estudante.nome = 'José Souza';
console.log(estudante);

const estudante2 = {};
estudante2.nome = 'Ana Maria';
console.log(estudante2);
