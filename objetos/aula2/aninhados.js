const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11987654321", "11123456789"],
};

cliente.endereco = {
    rua: "R. Koseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

console.log(cliente);
console.log(cliente.endereco);
console.log(cliente["endereco"]);