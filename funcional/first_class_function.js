// Diz-se que uma linguagem possui funçoes de primeira classe 
// quando funções nessa linguagem são tratadas como qualquer
// outra varia variavel.

const x = 3
const y = function(txt) {
    return `Esse é o texto: ${txt}`
}
const z = () => console.log('Zzzzzzzz')

console.log(x)
console.log(y('ola'))
z()