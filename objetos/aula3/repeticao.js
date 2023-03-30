const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11987654321", "11123456789"],
};

cliente.enderecos = [
    {
        rua: "R. Koseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    }
];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}.`);
    }
}