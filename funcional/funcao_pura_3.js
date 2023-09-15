/**
    Uma função pura é uma função em que o valor de retorno é
    determinado APENAS por seus valores de entrada, sem efeitos
    colaterais observaveis.

 */

// função IMPURA com efeito colaterais observaveis     

let gerarNumEntre = 0

function soma (a, b) {
    gerarNumEntre++
    return a + b
}

console.log(gerarNumEntre)
console.log(soma(1,2))
console.log(soma(1,2))
console.log(soma(1,2))
console.log(soma(1,2))
console.log(soma(1,2))
console.log(gerarNumEntre)