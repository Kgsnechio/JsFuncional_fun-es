// Funções que operam em outras funções,
// tomando-as como argumentos ou retornando-as,
// são chamadas de higher-order functions

function executar(fn, ...valores){
    return function (texto) {
        return `${texto} ${fn(...valores)}`
    }
}

function soma(a, b, c) {
    return a + b + c
}

function multi(a, b) {
    return a * b
}

console.log(executar(soma, 4, 5, 6)('A soma é'))
console.log(executar(multi, 30, 40)('A multiplicação é'))