/* function criaPessoa (nome, sobrenome, idade){
   return{
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
   } 
}
const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
const pessoa2 = criaPessoa('Gabriel', 'Sumara', 17);
const pessoa3 = criaPessoa('Arthur', 'Serafim', 17);
const pessoa4 = criaPessoa('Leonardo', 'Dalponte', 16);
const pessoa5 = criaPessoa('Gustavo', 'Raichaski', 18);
const pessoa6 = criaPessoa('Evandro', 'José', 42); */
const pessoa1 = {
    nome: 'Arthur',
    sobrenome: 'Teixeira',
    idade: 17,
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está dizendo Oi!`)
    },
    incrementaIdade(){
        this.idade++
        console.log(pessoa1.idade)
    }
}
pessoa1.fala();
pessoa1.incrementaIdade()