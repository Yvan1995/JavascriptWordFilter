const { Observable } = require('rxjs');

const obs = new Observable(subscriber => {
    subscriber.next('RxJs')
    subscriber.next('é')
    subscriber.next('bem')
    subscriber.next('poderoso!!')

    if(Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error('Que problema hein!!')
    }
})

//descontinuado. sempre verificar a documentação
// obs.subscribe(
//     valor => console.log(`Valor: ${valor}`),
//     erro => console.log(`Valor: ${erro}`),
//     () => console.log('FIM!')
// )
//Para tratarmos erros a partir do Observable,
//podemos utilizar de 3 funçoes. 
//A primeira trata o caso de sucesso
//A segunda trata o erro.
//A terceira é chamada quando invocamos o método complete()
obs.subscribe({
    next(valor) {
        console.log(`valor:${valor}`)
    },
    complete() {
        console.log('FIM!!!')
    },
    error(msg) {
        console.log(`Erro:${msg}`)
    }
})