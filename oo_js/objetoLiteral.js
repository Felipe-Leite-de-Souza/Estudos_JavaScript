const user = {
    nome: "Juliana",
    email: "juju@g.com",
    nascimento: "1990/01/01",
    role: "estudante",
    ativo: true,
    exbirInfos: function () {
        console.log(this.nome,this.email);
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    nascimento: "1980/01/01",
    role: "admin",
    ativo: true,
    criarCurso() {
        console.log("Curso criado!");
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exbirInfos();
