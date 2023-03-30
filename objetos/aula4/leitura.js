// require -> utilizada para ler arquivos ".json"
const dados = require("./cliente.json");

console.log(dados);

console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);

// Não é um objeto, por isso retorna um undefined
console.log(clienteEmString.nome);

// Transformando de String para objeto
const ObjetoCliente = JSON.parse(clienteEmString);
console.log(ObjetoCliente);