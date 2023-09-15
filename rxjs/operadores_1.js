// Os dois tipos
//1. Operadores de criação
const { of, from } = require('rxjs');

//2. Operadores encadeáveis (Pipeable Op.)
const { last, first, map } = require('rxjs/operators');

//O operador [from] funciona da mesma forma so que como um array.
//from([1, 2, false, 'Ana', 'último'])
of(1, 2, false, 'Ana', 'último')
    //.pipe(first()) //=> 1
    //outras formas de encadeamento  
    .pipe(
        last(), //=> 'último'
        map(v => v[0]),
        map(v => `A letra encontrada foi: ${v}`)
    ) 
    //.pipe(map(v => v[0]))//=> 'ú'
    .subscribe(function(valor) {
        console.log(`valor gerado foi: ${valor}`)
    })