const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString())
}

console.log('inicio')
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_,conteudo) => console.log(conteudo.toString()))
console.log('fim')


console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho) //processamento sincrono. Espera a leitura do arquivo, quando houver resposta, ele armazena na variavel
console.log(conteudo.toString())
console.log('Fim Sync')