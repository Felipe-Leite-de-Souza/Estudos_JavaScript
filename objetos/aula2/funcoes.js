const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11987654321", "11123456789"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insufuciente!");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado com sucesso! \nNovo saldo: ${this.saldo}.`);
        }
    }
};

cliente.efetuaPagamento(250); // Saldo insuficiente
cliente.efetuaPagamento(25); // Saldo realizado com sucesso