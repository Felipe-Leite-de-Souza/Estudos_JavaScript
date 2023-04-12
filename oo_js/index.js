import User from "./User.js";
import Docente from "./Docente.js"
import Admin from "./Admin.js"

// const novoUser = new User("Mariana", "m@m.com", "1990-01-01");
// console.log(novoUser.exibirInfos());

// const novoAdmin = new Admin("Rodrigo", "r@r.com", "1983-01-01");
// console.log(novoAdmin.nome);
// novoAdmin.nome = ""; // forçando um erro
// console.log(novoAdmin.nome);

const novoDocente = new Docente("Guilherme", "g@g.com", "1978-01-01");
console.log(novoDocente.exibirInfos());