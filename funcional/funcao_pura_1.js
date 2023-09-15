/**
    Uma função pura é uma função em que o valor de retorno é
    determinado APENAS por seus valores de entrada, sem efeitos
    colaterais observaveis.

 */

// função IMPURA, pois depende de valores externos => PI ou o metodo Math    

const PI = 3.14

function areaCirc(raio) {
    return raio * raio * PI
}

console.log(areaCirc(10))
console.log(areaCirc(10))
console.log(areaCirc(10))

// PURA

function AreaCircPura(raio, circ) {
    return raio * raio * circ
}

console.log(AreaCircPura(10,Math.PI))
console.log(AreaCircPura(10,3.14))