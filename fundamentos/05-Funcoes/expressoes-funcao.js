// (Forma) Declaração de função

function minhaFuncao(params) {
    // bloco de código
}

minhaFuncao("param")

// (Forma) Expressão de função

// Função anônima = Sem nome
const soma = function (num1, num2) {return num1 + num2}
console.log(soma(1, 1))


// Diferença principal: HOISTING
// Funções e var são "listadas" no "topo" de leitura do código do arquivo.

console.log(apresentar())

function apresentar() {
    return "olá"
}

// Erro -> inicializada após o log
//console.log(soma1(1,1))
const soma1 = function (num1, num2) {return num1 + num2}

// Correto -> inicializada e logada
console.log(soma1(1,1))