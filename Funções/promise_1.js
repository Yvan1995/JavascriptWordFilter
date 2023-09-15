
const primeiroElemento = array => array[2]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()


new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento) // capturando o primeiro elemento do array 
    .then(primeiraLetra) // capturando a primeira letra do elemento  
    .then(letraMinuscula)
    .then(console.log) 
