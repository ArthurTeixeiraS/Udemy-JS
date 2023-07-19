class Pessoa {
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }
}
const p1 = new Pessoa('Arthur', 17)
console.log(p1)
console.log(p1.nome)
console.log(p1.nome.toUpperCase())