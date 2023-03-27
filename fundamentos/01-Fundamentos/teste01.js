const idade = 2;
const nome = "Lara";
const sobrenome = "Ayumi";
const bacharel = false;
const dezAnosDepois = "12";

const nomeCompleto = nome + sobrenome

console.log(nomeCompleto)

const resultado = idade + dezAnosDepois
console.log(resultado)

console.log(bacharel == 1)

// Maiúscula e Minúscula

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)


// Tipo null e undefined

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input1 = null;
let input2;

console.log(input1); // null
console.log(input2); // undefined


console.log(null == undefined); // true
console.log(null === undefined); // false

// Salvando valor de uma operação em memória

const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;
console.log(operacao)

const operacao1 = (soma * multiplicacao) + 10;
console.log(operacao1)

const operacao2 = (soma + multiplicacao) / 10;
console.log(operacao2)

const operacao3 = (soma + multiplicacao) - 10;
console.log(operacao3)