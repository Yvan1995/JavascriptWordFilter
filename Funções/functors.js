//Functors são objetos que implementam a função MAP
// que tambem é um "wrapper"(embrulho) de um valor

//Array é um exemplo de functors
const nums = [1, 2, 3, 4, 5, 6]
const novosNums = nums
    .map(el => el + 10)
    .map(el => el * 2)

console.log(nums, novosNums)

function tipoSeguro(valor) {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined
        },
        map(fn) {
            if(this.invalido()){
                return tipoSeguro(null)
            } else {
                const novoValor = fn(this.valor)
                return tipoSeguro(novoValor)
            }
        },
        flatMap(fn) {
            return this.map(fn).valor
        },
    }
}

const original = 'Esse é um texto,'
const alterado = tipoSeguro('Esse é um texto')
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!`)
    .flatMap(t => t.split('').join(' '))

console.log(original,alterado)