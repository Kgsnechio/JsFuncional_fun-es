// Uma função pura é uma função em que o valor de retorno
// é determinado APENAS por seus valores de entrada, sem efeitos colaterais

const PI = 3.141592

// IMPURA - PI é um valor externo!
function areaCirc(raio) {
    return raio * raio * PI   //pi estável 
}

console.log(areaCirc(10))

// PURA - depende apenas dos valores passados para ela
function areaCircPura(raio, PI) {
    return raio * raio * PI   //pi estável 
}

console.log(areaCircPura(10, 3.14))
console.log(areaCircPura(10, 3.141592))
console.log(areaCircPura(10, Math.PI))