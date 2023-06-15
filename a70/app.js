//Revisão de Objetos
const pessoa = {
    nome: 'Arthur',
    sobrenome: 'Teixeira',
    idade: 17
};
const dado = 'idade'
//console.log(pessoa['nome']) //em alguns casos pode usar um valor dinâminco
//console.log(pessoa.sobrenome)
//console.log(pessoa[dado])


const pessoa1 = new Object();
pessoa1.nome = 'Gabriel'
pessoa1.sobrenome = 'Soares'
pessoa1.idade = 30
console.log(pessoa1.nome, pessoa1.sobrenome)

delete pessoa.nome
delete pessoa[dado]
console.log(pessoa)

pessoa1.falarNome = function(){
    return(`${this.nome} está falando OI!`)
}
console.log(pessoa1.falarNome())

pessoa1.getDataNasc = function(){
    const dataAgora = new Date()
    return dataAgora.getFullYear() - this.idade
}
console.log(pessoa1.getDataNasc())



