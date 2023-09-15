const { Observable } = require('rxjs');

const promise = new Promise(resolve => {
    resolve('Promise é bem legal!!')
    //somente um resolve da promise podera ser invocado
    resolve('Promise é bem legal!!')
})

//método then
promise.then(console.log);

const obs = new Observable(subscriber => {
    //com o rxjs ja podemos invocar varias vezes diferente da promise
    setTimeout(() => {
        subscriber.next('chamada do método setTimeout encadeado:Observer')
    },1000)
    subscriber.next('é')
    subscriber.next('bem')
    subscriber.next('legal!!')
})

//método subscribe
obs.subscribe(console.log)
obs.subscribe(text => console.log(text.toUpperCase()))
