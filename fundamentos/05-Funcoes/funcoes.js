//let x = "";
//console.log(x)
//x = "oi";


// Três formas de escrever as funções

// Forma 1 - Declaração de função


// 1) Declara a função
                      // string
function imprimeTexto(texto) {
    console.log(texto)
}

// 2) Executa a função (uma ou mais vezes)

imprimeTexto("oi");
imprimeTexto("outro texto");


// Forma 2 - Sem parâmetros
function soma() {
    return 2 + 2;
}

console.log(soma())

imprimeTexto(soma());