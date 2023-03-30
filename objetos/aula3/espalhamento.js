const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11987654321", "11123456789"],
};

// Comentar para forçar o erro
cliente.enderecos = [
    {
        rua: "R. Koseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    }
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}.`);
    console.log(`Ligando para ${telefoneResidencial}.`);
}

// ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

// Espalhamento
ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);