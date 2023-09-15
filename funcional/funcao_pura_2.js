/**
    Uma função pura é uma função em que o valor de retorno é
    determinado APENAS por seus valores de entrada, sem efeitos
    colaterais observaveis.

 */

// função IMPURA    

function GerarNumeroAleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(GerarNumeroAleatorio(1, 100))
console.log(GerarNumeroAleatorio(1, 100))
console.log(GerarNumeroAleatorio(1, 100))
console.log(GerarNumeroAleatorio(1, 100))
console.log(GerarNumeroAleatorio(1, 100))