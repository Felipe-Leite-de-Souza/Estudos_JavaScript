const texto1 = "Olá Mundo!";
const texto2 = 'Olá Mundo!';
const senha = "senhaSuperSegura456!"
const StringDeNumenros = "34567";

const citação = "Meu nome é ";
const meuNome = "Leonardo";
const citaçãoModelo1 = 'O Leo disse "oi"';
const citaçãoModelo2 = "O Leo disse 'oi'";
console.log("citaçãoModelo1: " + citaçãoModelo1)
console.log("citaçãoModelo2: " + citaçãoModelo2)

// Concatenação (+)


console.log(citação + meuNome)

// Template string ou Template literal


// outras formas de string utilizando Unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Comparação entre strings

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

// Padronização de letras maiúsculas ou minúsculas para as comparações entre strings
const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

const inputMinusculo = input1.toLowerCase();

console.log(cidade1 === inputMinusculo); // true


// Quantidade de caracteres

const senha1 = "minhaSenha123"
console.log(senha1.length) // 13 caracteres
