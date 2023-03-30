const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    });
    return resultado;
};

// Ordernação por ordem alfabética
const ordenadoPorNome = ordenar(clientes, "nome");
console.log(ordenadoPorNome);


// Ordenação inversa - Forma 1
function ordenarInverso(lista, propriedade, ordem = "crescente") {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] > b[propriedade]) {
            return -1;
        }
        if (a[propriedade] < b[propriedade]) {
            return 1;
        }
        return 0;
    });
    if (ordem != "crescente") {
        resultado.reverse();
    }
    return resultado;
};

const ordenadoPorNome1 = ordenarInverso(clientes, "nome", "crescente");
console.log(ordenadoPorNome1);

// Ordenação inversa - Forma 2
//const ordernadoInverso = ordenadoPorNome.reverse();
//console.log(ordernadoInverso);
