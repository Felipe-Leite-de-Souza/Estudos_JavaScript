const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "12345678900",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

console.log(`Os 3 primeiros dígitos do CPF são ${cliente.cpf.substring(0,3)}.`)