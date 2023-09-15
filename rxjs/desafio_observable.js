const { Observable, noop } = require('rxjs');
//Desafio!
//criar uma stream de numeros
//entre min e max com Observable
//obter os numeros entro um valor e outro
// entre(4,10)
//     .subscribe(
//         num => console.log(`num = ${num}`)
//     )

function entre(min,max) {
    return new Observable(subscriber => {
        for(let i = min; i<=max; i++) {
            subscriber.next(i)
        }
        subscriber.complete()
    })
}
//Esse trecho do código foi reajustado de acordo com a nova documentação do RxJs
entre(4,10)
    .subscribe({
            next: (num) => console.log(num),
            noop,
            complete: () => console.log('FIM!!')
        })
