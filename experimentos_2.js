function esperarPor(tempo) {
    const futuro = Date.now() + tempo
    while(Date.now() < futuro) {}
}

// setInterval => a execução não finaliza devido a função estar na stack
//  e com isso o Js não o finaliza devido ser uma função vazia.
setInterval(() => console.log('Exec #1'), 400)
setTimeout(() => {
    esperarPor(3000)
    console.log('exec #02')
}, 300)

esperarPor(5000)
console.log('Fim') 