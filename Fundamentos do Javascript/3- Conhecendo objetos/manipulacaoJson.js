//Ex4
const objAnimais = require('./animais.json');
console.log('Dados em animais.json: ', objAnimais);
const novoAnimal = {
    id: 4, 
    nome: "Tigre",
    tipo: "Mamífero",
    habitat: "Floresta"
};
objAnimais.animais.push(novoAnimal); // adicionando um novo animal no array

// Modifica o habitat de um animal existente no array de animais
objAnimais.animais[1].habitat = 'Pólo Norte'; 
// const animalParaModificar = objAnimais.animais.find(animal => animal.id === 2);
// if (animalParaModificar) {
//     animalParaModificar.habitat = "Oceano Antártico";
// }

console.log('Alterando o habitat de um animal: ', objAnimais);

// delete objAnimais.animais[0];
// console.log('Removendo um animal :', objAnimais); // saida:  [<1 empty item>,{...},...]

const indiceAnimalRemover = objAnimais.animais.findIndex(animal => animal.id === 1);
if (indiceAnimalRemover !== -1) {
    objAnimais.animais.splice(indiceAnimalRemover, 1);
}
console.log('Removendo um animal :', objAnimais);

const stringAnimais = JSON.stringify(objAnimais);
console.log(typeof stringAnimais);

