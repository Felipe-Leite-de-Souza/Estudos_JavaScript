function cumprimentar0(){
    console.log('oi gente!')
}
   
cumprimentar0()

function cumprimentaPessoa0(pessoa){
   console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa0('Helena')

function cumprimentar(){
    return 'Oi gente!'
   }
   
function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
}

console.log(operacaoMatematica(15, 30, 45)) // 90