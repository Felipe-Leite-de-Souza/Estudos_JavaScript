const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Foma 1
//const meuSet = new Set(nomes);
//const nomesAtualizados = [...meuSet];

// Forma 2 - Mais compacta
const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);