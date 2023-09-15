function bomDia() {
    console.log('Bom dia')
}
const boaTarde = function () {
    console.log('Boa tarde')
}
let boaNoite = () => console.log('Boa noite 2')
// passar uma função como parametro para outra função
function executarQualquerCoisa(fn) {
    if(typeof fn == 'function') { // verificação para que o retorno seja uma função
        fn()
    }
}

executarQualquerCoisa(boaNoite) // não retorna nada
executarQualquerCoisa(bomDia) // retorna bomDia ()
executarQualquerCoisa(boaTarde) // retorna boaTarde ()

// 2) Retornar uma função a partir de uma outra função

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const pot34 = potencia(3)(4)
// caso potencia(any) tenha só um parametro =>>>> [Function (anonymous)]
//OBS potencia(any)(any) ===>> sintaxe correta