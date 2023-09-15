const { timer, Subscription } = require('rxjs');

const obs = timer(3000, 500)

const sub1 = obs.subscribe(num => {
    console.log(`#1 gerou o numero ${num}`)
})
const sub2 = obs.subscribe(num => {
    console.log(`#2 gerou o numero ${num}`)
})

const sub = new Subscription()
sub.add(sub1)
sub.add(sub2)

sub1.add(sub2)

//Depois de 5000 unsubscribe
setTimeout(() => {
    sub1.unsubscribe()
    //sub2.unsubscribe()
}, 5000)