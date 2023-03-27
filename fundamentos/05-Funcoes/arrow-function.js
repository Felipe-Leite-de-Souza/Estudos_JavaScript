function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

// Arrow function
// É sempre const e não pode ser nomeado
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;


// Hoisting: arrow function se comporta como expressão

// Arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente números de 1 a 9."
    } else {
        return num1 + num2;
    }
}