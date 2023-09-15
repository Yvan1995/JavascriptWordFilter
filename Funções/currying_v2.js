
function textoComTamanhoEntre(min) {
    return function (max) {
        return function (erro) {
            return function (texto) {
                //Lazy evaluation
                const tamanho = (texto || '').trim().length

                if (tamanho < min || tamanho > max) {
                    throw erro
                }
            }
        }
    }
}

function aplicarValidacao(fn, valor) {
    try {

    } catch (e) {
        return { error: e }
    }
}

const forçarTamanhoPadrao = textoComTamanhoEntre(4)(225)
const forcarNomeProdutoValido = forçarTamanhoPadrao('Nome produto invalido')

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }
forcarNomeProdutoValido(p1.nome)