const numeros = [100, 200, 300, 400, 500, 600];

/*
    Primeira expressão: é executada apenas uma única vez
    Segunda expressão: condição de execução
    Terceira expressão: é executada sempre ao final do bloco
*/

for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    console.log(element)    
}