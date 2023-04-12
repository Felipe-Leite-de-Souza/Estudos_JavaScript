// function User(nome, email, nascimento, ativo) {
//     this.nome = nome;
//     this.email = email;
//     this.nascimento = nascimento;
//     this.ativo = ativo;
// 
//     this.exibirInfos = function () {
//         return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.ativo}`
//     }
// }

// const novoUser = new User("Amanda", "amanda@amanda.com", "1994/01/01", true);
// console.log(novoUser.exibirInfos());

// function Admin(role) {
//     User.call(this, "Amanda", "amanda@amanda.com", "1994/01/01", true);
//     this.role = role || "estudante";
// }
// 
// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin("admin");
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role);

const user = {
    init: function(nome, email){
        this.nome = nome;
        this.email = email;
    },
    exibirInfos: function(nome) {
        return this.nome;
    }
}

const novoUser = Object.create(user);
novoUser.init("Amanda", "amanda@amanda.com");
console.log(novoUser.exibirInfos());

// console.log(novoUser.exibirInfos("Amanda"));
// console.log(user.isPrototypeOf(novoUser));