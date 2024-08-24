//Ex1
// Criando um array esparso
const arrayEsparso = [];
// Atribuindo valores a alguns elementos do array
arrayEsparso[1] = 'Elemento 1';
arrayEsparso[3] = 'Elemento 3';
arrayEsparso[7] = 'Elemento 7';
// Imprimindo os resultados
console.log(arrayEsparso);
console.log(arrayEsparso.length);

//Ex2
const array5Elementos = [1, 2, 3, 4, 5];
console.log(array5Elementos);
array5Elementos[0] = 'Novo Elemento';
console.log(array5Elementos);

//Ex3
const meuArray = [];
meuArray.push(10, 20, 30);
console.log(meuArray);
meuArray[0] = 20;
console.log(meuArray);

//Ex4
let meuArray2 = [];
meuArray2.push(2);
meuArray2.push(4);
meuArray2.push(8);
console.log(meuArray2);

//Ex5
let clinica = [];
clinica.push('Cachorro');
clinica.push('Gato');
clinica.push('Cavalo');
console.log('Fila de animais após a chegada: ', clinica);
clinica.pop();
clinica.pop();
clinica.pop();
console.log('Fila de animais aguardando: ', clinica);


