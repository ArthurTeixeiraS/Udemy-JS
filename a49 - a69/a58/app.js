//Função Construtora retorna objetos
//Função fabrica retorna objetos
//Construtora => Pessoa pois usamos "new" pois são moldes para novos objestos
//metódo é uma função dentro de um objeto
class Pessoa {
    constructor(nome, sobrenome) {
        //atributos e metodos declarados aqui, são privados
        const ID = 123456;
        const metedoInterno = function () {
        };
        //com this são atributos ou metodos publicos
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.metodo = function () {
            console.log(this.nome + ' sou um metodo');
        };
    }
}

const p1 = new Pessoa('Arthur', 'Serafim')
const p2 = new Pessoa('Gabriela', 'Machado')
console.log(p1.nome)
p2.metodo()