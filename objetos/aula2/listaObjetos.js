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

// Adicionando mais um endereço no objeto
cliente.enderecos.push( {
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
});

console.log(cliente.enderecos);

// Filtrando apenas endereços com apartamento
const listaApenasApartamentos = cliente.enderecos.filter(
    (enderecos) => enderecos.apartamento === true
);

console.log("\n\nEndereço de apartamentos: ");
console.log(listaApenasApartamentos);