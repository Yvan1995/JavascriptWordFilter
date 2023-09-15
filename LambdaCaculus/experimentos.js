
//Number.prototype.log = function() { console.log(this) }
//Function.prototype.log = function() { console.log(this) }

//para usar o quooka é necessario usar ctrl + shift + p e abrir um novo arquivo
let r

const I = a => a

r = I(3)
r

r = I(I)
r

const SELF = f => f(f)

r = SELF(I)
r

const PRI = a => b => a

r = PRI(7)(11)
r

const ULT = a => b => b

r = ULT(7)(11)
r

const TROCA = f => a => b => f(b)(a)

r = TROCA(ULT)(7)(11)
r

r = TROCA(PRI)(6)(12)
r

const ULT2 = a => b => TROCA(PRI)(a)(b)

r = ULT2(13)(20)
r

//boolean TRUE | FALSE
//TRUE ? <PRI> : ULT
//FALSE ? PRI : <ULT>
 
const T = PRI
const F = ULT

//inspect retorna uma função com um valor atribuido a variavel 
T.inspect = () => 'Verdadeiro(PRI)'
F.inspect = () => 'False(ULT)'


T
F

// NOT
const NOT = a => a(F)(T)

r = NOT(F)
r

// AND
const AND = a => b => a(b)(F)

// so retorna TRUE caso ambos forem TRUE.
r = AND(F)(T)
r

// OR retorna true caso pelo menos um valor seja TRUE
const OR = a => b => a(T)(b)

r = OR(F)(T)
r

setTimeout(() => {
    console.log('assincrono: 3')
}, 5000)
setTimeout(() => {
    console.log('assincrono: 4')
}, 1000)
console.log('sincrono: 1')
console.log('sincrono: 2')