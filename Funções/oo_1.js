//.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) =>  metodo para conversão de moedas. 

//Função construtora
function Produto(nome, preco, desc = 0.50) { //50 por cento de desconto

    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoFinal = function() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 10)
console.log(`Nome do produto: ${p1.nome}`)
console.log(`Preço cheio: ${p1.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
console.log(`Preço com desconto: ${p1.precoFinal().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)

console.log('')// quebra de linha no console

const p2 = new Produto('geladeira', 3000)
console.log(`Nome do produto: ${p2.nome}`)
console.log(`Preço cheio: ${p2.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
console.log(`Preço com desconto: ${p2.precoFinal().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)