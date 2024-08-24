const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// O primeiro parâmetro é o start, que é um número (onde começa a alteração)
// O segundo parâmetro é o deleteCount, quantos elementos serão excluidos a partir do start (quantidade de itens a serem removidos)
// O terceiro parâmetro é o elemento que vai ser incluido nesse local
listaEstudantes.splice(1, 2, 'Rodrigo');
//listaEstudantes.push('Rodrigo');

console.log(listaEstudantes);

//Exemplos
animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão'];
animaisDoAquario.splice(1, 0, 'sardinha'); // [ 'baleia', 'sardinha', 'polvo', 'golfinho', 'tubarão' ]
animaisDoAquario.splice(3, 2, 'atum'); // [ 'baleia', 'sardinha', 'polvo', 'atum' ]

console.log(animaisDoAquario); // [ 'baleia', 'sardinha', 'polvo', 'atum' ]
