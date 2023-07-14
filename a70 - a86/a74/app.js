//Construtora -> Molde (classe)
class Pessoa { //toda construtora tem seu atributo interno prototype
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        //caso haja um metodo aqui com o mesmo nome de um prototype,
        //a prioridade fica com o metodo daqui
        this.nomeCompleto;
    }
}
Pessoa.prototype.nomeCompleto = function() { //aqui nós adicionamos um metodo a esse atributo
    return this.nome + ' ' + this.sobrenome
 }
//instancia

const pessoa1 = new Pessoa('Arthur', 'Teixeira') //Pessoa = Função Construtora
const pessoa2 = new Pessoa('Bruno', 'Miranda')
const data = new Date(); //<- Date = Função construtora
/* console.dir(pessoa1)
console.dir(pessoa2)
console.dir(data) */
console.log(pessoa1.nomeCompleto())

//O JS é baseado em protótipos para passar propriedades e metodos entre objetos
//(__proto__)

// cadeia = pessoa1 ==> Pessoa.prototype ==> Object.prototype
