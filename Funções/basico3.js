// Arrow function -> são funções anonimas
const boaTarde = () => console.log('Boa tarde teste!!!')
boaTarde()

const saudacao = nome => `fala ${nome}, blz?` 
console.log(saudacao('Maria'))

const somar = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0
    for(let n of numeros) { 
        total += n
    }
    return total
}
console.log(somar(1,2,3))
console.log(somar(1,2,3,4,5,6))
console.log(somar(1,2,3,4,5,6,7,8))


const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(5))

// this (limitações) //programação OO  
Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = () => {
    console.log(this[0])
}

const numeros = [1,2,3,4]
numeros.ultimo()
numeros.primeiro()













