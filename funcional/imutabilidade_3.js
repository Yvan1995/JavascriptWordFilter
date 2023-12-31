
const pessoa = Object.freeze ({
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end : Object.freeze ({
        rua: 'Feliz'
    })
})

// atribut. por referencia.
const outraPessoa = pessoa

// passagem por referencia (função impura)
function alteraPessoa(pessoa) {
    const novaPessoa = {...pessoa}
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.end.rua = 'ABC'
    return novaPessoa
}



const novaPessoa = alteraPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)

let a = 3
let b = a //atribu. por valor (cópia!)

a++
b--

console.log(a,b)
