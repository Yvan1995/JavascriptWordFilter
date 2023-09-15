class Produto {

    constructor(nome, preco, desc = 0.5) {
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }

    // get preco() {
    //     return `Preço: ${this._preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    // }

    get nome() {
        return `Produto: ${this._nome}`
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    get precoFinal() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 10)
//p1.nome = 'caneta'
console.log(p1.nome)

const p2 = new Produto('Geladeira', 10000, 0.8)
console.log(p2.preco)
console.log(p2.precoFinal)