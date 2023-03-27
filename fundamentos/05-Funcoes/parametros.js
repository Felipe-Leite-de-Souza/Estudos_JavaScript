// Parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2))
console.log(soma(245, 20))
console.log(soma(-500, 60))

// Parâmetros x Argumentos

// Ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

// Cuidado ao inverter
//console.log(nomeIdade(40, "Juliana"))

console.log(nomeIdade("Juliana", 40))

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 + numero2;
}

// NaN
//console.log(multiplica(soma(4, 5)))

// Com os parâmetros tendo default numero1 = 1 e numero2 = 1
console.log(multiplica(soma(4, 5)))

console.log(multiplica(soma(4, 5), soma(3, 3)))