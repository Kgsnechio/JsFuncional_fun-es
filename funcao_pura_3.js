// mock - teste de valores externos 

let qtdeDeExecucoes = 0

function somar(a, b) {   // Pura - retorno depende apenas dos valores de entrada //Muito facil de testar
    qtdeDeExecucoes++    // impura - efeito colateral observáveis
    return a + b
}

console.log(qtdeDeExecucoes)
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(qtdeDeExecucoes)