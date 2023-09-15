//criar uma função para somar(3)(4)(5)

function somar(a) {
    return function(b) {
        return function(c) {
            return a + b +c
        }
    }
}
const somarAB = somar(1)(2)
console.log(somarAB(3))

console.log(somar(4)(5)(6))


//fn -> 3 * 7
//fn -> 3 + 7
//fn -> 3 - 7
// criar uma função de cálculo(calcular) => (3) (7) (fn) sendo o terceiro parametro
// do exercicio (fn) a função responsavel para calcular os dois primeiros (3)(7).

function calcular(x) {
    return function(y) {
        return function(fn) {
            return fn(x,y)
        }
    }
}

function subtrair(a,b) {
    return a - b
}

function multiplicar(a,b) {
    return a * b
}

const r1 = calcular(10)(5)(subtrair)
const r2 = calcular(10)(5)(multiplicar)
console.log(r1,r2)