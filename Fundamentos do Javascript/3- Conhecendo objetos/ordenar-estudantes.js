const estudantes = require('./estudantes.json');

// Ordenar de forma crescente pelo nome
function ordena(lista, propriedade) {
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1; // Se é menor ele vai pra frente
        if (a[propriedade] > b[propriedade]) return 1; // Se é maior ele vai pra trás
        return 0;
    })
}

const listaOrdenada = ordena(estudantes, 'nome');
console.log(listaOrdenada);

/////
// Ordenar de forma decrescente pelo nome
function ordenar(lista, propriedade, decrescente = false) {
    return lista.sort((a, b) => {
        let valorA = a[propriedade];
        let valorB = b[propriedade];

        if (typeof valorA === 'string') {
            valorA = valorA.toUpperCase();
        }
        if (typeof valorB === 'string') {
            valorB = valorB.toUpperCase();
        }

        if (valorA < valorB) {
            return decrescente ? 1 : -1;
        }
        if (valorA > valorB) {
            return decrescente ? -1 : 1;
        }
        return 0;
    });
}

// Exemplo de uso para ordenar de forma decrescente pelo nome
const ordenadoNomeDecrescente = ordenar(estudantes, "nome", true);
console.log(ordenadoNomeDecrescente);
