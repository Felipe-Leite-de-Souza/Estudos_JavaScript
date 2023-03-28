const nomes = ["Evaldo", "Mari", "Camis"];

console.log("1° Forma - Com parâmetros");
nomes.forEach(function (nome) {
    console.log(nome);
})

console.log("\n");
console.log("2° Forma - Arrow function");
nomes.forEach((nome) => {
    console.log(nome);
})

console.log("\n");
console.log("3° Forma - Callback externa");
function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);