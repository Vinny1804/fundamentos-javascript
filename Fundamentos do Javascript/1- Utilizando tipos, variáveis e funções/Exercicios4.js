//Ex1
function cumprimentarPessoa(nome) {
    return `Olá, ${nome}! Como vai?`;
}

const nomeDaPessoa = 'Vinicius';
const saudacao = cumprimentarPessoa(nomeDaPessoa);

console.log(saudacao);

//Ex2
function idadeDeIdade(idade) {
    if (idade >= 18) {
        return 'É maior de idade';
    } else {
        return 'É menor de idade';
    }
}
console.log(idadeDeIdade(18));
console.log(idadeDeIdade(16));

//Ex3
function verificaPalindromo(string) {
    const stringInvertida = string.split('').reverse().join('');
    return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPalindromo("arara")); // true
console.log(verificaPalindromo("Frase")); // false

//Ex4
function encontraMaiorValor(num1, num2, num3) {
    let maior = num1; // Assumindo inicialmente que num1 é o maior
    if (num2 > maior) {
        maior = num2;
    }
    if (num3 > maior) {
        maior = num3;
    }
    return maior;
  }

//Ex5
const calculaPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};
const base = 2;
const expoente = 3;
const resultado = calculaPotencia(base, expoente);
console.log(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`); // Saída: O resultado de 2 elevado a 3 é: 8