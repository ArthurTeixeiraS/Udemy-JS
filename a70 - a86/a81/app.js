//Classes!!!!!!!!!
class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
        /* this.falar = function(){
            return `${this.nome} está falando`
        } */}

        falar(){ //dessa forma, declaramos o metodo dentro do pai da construtora, fazendo com que o metodo vá automaticamente para o prototype
            console.log(`${this.nome} está falando`)
        }

}

const p1 = new Pessoa('Arthur', 'Teixeira'); 
console.log(p1)
console.log(p1.falar())
const p2 = new Pessoa('Bruno', 'Fernandes')
console.log(p2)
console.log(p2.falar())