//Ex1
console.log('Exercicio 1:');
const dados = require('./dados.json');
console.log('Mostrar todos os dados: ', dados);
console.log('Mostrar todos os produtos: ', dados.produtos);
console.log('Mostrar cada item nos produtos ID: ', dados.produtos[0].id);
console.log('Mostrar cada item nos produtos Nome: ', dados.produtos[0].nome);
console.log('Mostrar cada item nos produtos Preço: ', dados.produtos[0].preco);
console.log('Mostrar cada item nos produtos ID: ', dados.produtos[1].id);
console.log('Mostrar cada item nos produtos Nome: ', dados.produtos[1].nome);
console.log('Mostrar cada item nos produtos Preço: ', dados.produtos[1].preco);



console.log('Mostrar todos os usuários: ', dados.usuarios);
console.log('Mostrar cada item nos usuários ID: ', dados.usuarios[0].id);
console.log('Mostrar cada item nos usuários Nome: ', dados.usuarios[0].nome);
console.log('Mostrar cada item nos usuários e-mail: ', dados.usuarios[0].email);
console.log('Mostrar cada item nos usuários ID: ', dados.usuarios[1].id);
console.log('Mostrar cada item nos usuários Nome: ', dados.usuarios[1].nome);
console.log('Mostrar cada item nos usuários e-mail: ', dados.usuarios[1].email);

