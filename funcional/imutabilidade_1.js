// Os operadores rest e spread permitem trabalhar com múltiplos parâmetro em funções. 
//  Sendo o Rest utilizado para permitir que uma função receba um número indefinido de parâmetros, 
//  enquanto o spread permite definir um número indefinido de parâmetros para uma função, Array ou objeto.


//return [...array].sort((a,b) => a-b)

function ordenar(array) {
    return [...array].sort()    
}

const nums = [3,1,7,9,4,6]
ordenar(nums)
const numsOrdenados = ordenar(nums)


console.log(nums, numsOrdenados)