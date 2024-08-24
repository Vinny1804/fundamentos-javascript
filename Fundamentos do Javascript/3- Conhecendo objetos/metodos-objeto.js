const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    //  enderecos: [{
    //    rua: 'Rua Joseph Climber',
    //    numero: '45',
    //    complemento: 'apto 43'
    //  },
    //  {
    //    rua: 'Rua Dona Clotilde',
    //    numero: '71',
    //    complemento: null
    // }]
}

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')) {
    console.error('É necessário ter um endereço cadastrado');
}
///
const meuObjeto = { a: 1, b: 2, c: 3 };
const chaves = Object.keys(meuObjeto);
const valores = Object.values(meuObjeto);
console.log(chaves); // Saída: ['a', 'b', 'c']
console.log(valores); // Saída: [1, 2, 3]
///
const meuObjeto1 = { a: 1, b: 2, c: 3 };
const entradas = Object.entries(meuObjeto1);
console.log(entradas); // Saída: [['a', 1], ['b', 2], ['c', 3]]
///
const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };
const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);
console.log(objetoFusionado); // Saída: { a: 1, b: 3, c: 4 }
