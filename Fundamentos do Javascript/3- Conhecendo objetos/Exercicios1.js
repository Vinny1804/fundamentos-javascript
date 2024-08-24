//Ex1
const livro = {
    titulo: 'Harry Potter e a Ordem da Fênix',
    autor: 'J. K. Rowling',
    anoPublicacao: 2003,
    genero: 'Ficção Juvenil'
};
console.log(`Exercicio 1: Detalhes do Livro 1:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}`);
console.log('\n');

//Ex2
const anoAtual = new Date().getFullYear()
const livro2 = {
    titulo: 'O Diário de Anne Frank',
    autor: 'Anne Frank',
    anoPublicacao: 1947,
    genero: 'Biografia',
};
livro2.idadePublicacao = anoAtual - livro2.anoPublicacao;
livro2.mostrarDetalhes = "Detalhes do Livro 2:\n" +
                        "Título: " + livro2.titulo + "\n" +
                        "Autor: " + livro2.autor + "\n" +
                        "Ano de Publicação: " + livro2.anoPublicacao + "\n" +
                        "Gênero: " + livro2.genero + "\n" +
                        "Idade de Publicação: " + livro2.idadePublicacao + " anos";
console.log('Exercicio2: ', livro2.mostrarDetalhes);
console.log('\n');

//Ex3
const livro3 = {
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    anoPublicacao: 1943,
    genero: 'Literatura infantil',
    idadePublicacao: anoAtual - 1943
};
console.log('Exercicio 3: Detalhes do Livro 3:');
console.log("Título: " + livro3['titulo']);
console.log("Autor: " + livro3['autor']);
console.log("Ano de Publicação: " + livro3['anoPublicacao']);
console.log("Gênero: " + livro3['genero']);
console.log("Idade de Publicação: " + livro3['idadePublicacao'] + " anos");
console.log('\n');

//Ex4
const livro4 = {
    titulo: 'Anne de Green Gables',
    autor: 'L. M. Montgomery',
    anoPublicacao: 1908,
    genero: 'Romance',
    idadePublicacao: anoAtual - 1908,
    avaliacao: null // Nova propriedade para armazenar a avaliação
};
const novaAvaliacao = { nota: 4.5, comentario: "Ótima leitura!" };
if (livro4.avaliacao === null) {
    livro4.avaliacao = novaAvaliacao;
} else {
    console.log("Este livro já possui uma avaliação.");
}
console.log("Exercicio 4: Detalhes do Livro:");
console.log("Título: " + livro4.titulo);
console.log("Autor: " + livro4.autor);
console.log("Ano de Publicação: " + livro4.anoPublicacao);
console.log("Gênero: " + livro4.genero);
console.log("Idade de Publicação: " + livro4.idadePublicacao + " anos");
console.log("Avaliação: " + (livro4.avaliacao === null ? "Nenhuma avaliação disponível." : "Nota: " + livro4.avaliacao.nota + ", Comentário: \"" + livro4.avaliacao.comentario + "\""));
console.log('\n');

//Ex5
const livro5 = {
    titulo: 'Friends, Lovers, and the Big Terrible Thing',
    autor: 'Matthew Perry',
    anoPublicacao: 2022,
    genero: 'Memórias',
    idadePublicacao: anoAtual - 2022,
};
livro5.genero += ', Autobiografia';
console.log('Exercicio 5: Detalhes do Livro 5:');
console.log("Título: " + livro5['titulo']);
console.log("Autor: " + livro5['autor']);
console.log("Ano de Publicação: " + livro5['anoPublicacao']);
console.log("Gênero: " + livro5['genero']);
console.log("Idade de Publicação: " + livro5['idadePublicacao'] + " anos");
console.log('\n');

//Ex6
const livro6 = {
    titulo: 'The Walking Dead: A Ascensão do Governador',
    autor: 'Jay Bonansinga, Robert Kirkman',
    anoPublicacao: 2011,
    genero: 'Ficção pós-apocalíptica',
    idadePublicacao: anoAtual - 2011,
    avaliacao: { nota: 4.1, comentario: "Ótima leitura!" }
};
delete livro6.avaliacao;
console.log(`Exercicio 6: Detalhes do Livro:
    Título: ${livro6.titulo}
    Autor: ${livro6.autor}
    Ano de Publicação: ${livro6.anoPublicacao}
    Gênero: ${livro6.genero}
    Idade de Publicação: ${livro6.idadePublicacao} anos
    Avaliação: Nenhuma avaliação disponível.`)