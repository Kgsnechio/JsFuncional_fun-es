const pessoa = {
    nome: 'Maria',
    altura: 1.75,
    cidade: 'São Paulo',
    end: Object.freeze({
        rua: 'feliz'
    })
}

// Atribuição por Referência
// const novaPessoa = pessoa

function alterarPessoa(pessoa) {
    const novaPessoa = { ...pessoa }  //clone de forma raza
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.end = { ...pessoa.end }                         //clone de forma raza   
    novaPessoa.end.rua = 'ABC'                                  //efeito colateral
    return novaPessoa
}

const novaPessoa = alterarPessoa(pessoa) //Passagem por referencia

console.log(novaPessoa)
console.log(pessoa)