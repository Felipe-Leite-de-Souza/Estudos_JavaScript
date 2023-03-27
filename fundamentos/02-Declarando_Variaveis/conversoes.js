// Tipo de dado
// Booleanos

// Conversão implícita
const numero = 456;
const numeroString = "456";
const numeroStringModelo2 = Number("456");
const numeroStringModelo3Falha = Number("456a");


console.log(numero === numeroString)

console.log(numero + numeroString)



// Conversão explícita

console.log(numero == numeroString)

// Number() -> Converte para número
// String() -> converte para string

console.log(numero + Number(numeroString))

console.log(numero + Number(numeroStringModelo2))

// NaN
console.log(numero + Number(numeroStringModelo3Falha))



// String()

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let telefone1 = 12341234;
console.log("O telefone é " + telefone1.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.


let usuarioConectado = false;
console.log("Teste bool -> string: " + String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log("Teste string -> bool: " + String(usuarioConectado)); // agora teremos uma string “true”.


// Number())

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação

let largura1 = "10";
let altura1 = "5";
console.log( + largura1 * + altura1); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado2 = false;
console.log(Number(usuarioConectado2)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado2 = true;
console.log(Number(usuarioConectado2)); // agora teremos a conversão de true (verdadeiro) para o número 1.