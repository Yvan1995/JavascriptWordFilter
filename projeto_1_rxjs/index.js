const path = require('path')
const fn = require('./funcoes')
const _= require('lodash')
const { toArray, map } = require('rxjs/operators')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')', '!'
]

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeIniciarComNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeIniciarComNumero(),
        toArray(),
        fn.agruparElementos(),
        map(array=> _.sortBy(array, el => -el.qtde))
        //first(),
    )
    .subscribe(console.log)


    