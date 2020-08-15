// Uma função pura é uma função em que o valor de retorno
// é determinado APENAS por seus valores de entrada, sem efeitos colaterais

//função impura - não posivel definir qual o valor de saida apartir dos valores de entrada
function gerarNumeroAleatorio(min, max){
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(1,100))
console.log(gerarNumeroAleatorio(1,100))
console.log(gerarNumeroAleatorio(1,100))
console.log(gerarNumeroAleatorio(1,100))
console.log(gerarNumeroAleatorio(1,100))
console.log(gerarNumeroAleatorio(1,100))
console.log(gerarNumeroAleatorio(1,100))
console.log(gerarNumeroAleatorio(1,100))
console.log(gerarNumeroAleatorio(1,100))
console.log(gerarNumeroAleatorio(1,100))