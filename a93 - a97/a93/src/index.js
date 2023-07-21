class Pessoa{
    constructor(nome, idade, sexo){
       const data = new Date()
       this.nome = nome,
       this.idade = idade,
       this.datanasc = data.getFullYear() - idade,
       this.sexo = sexo
    }
}
const p1 = new Pessoa('Arthur', 17, 'Masculino')
console.log(p1.datanasc)