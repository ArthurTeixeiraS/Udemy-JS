//Factory function
//Constructor Function
function criaPessoa(nome, sobrenome, peso, altura){
    //this sempre se refere a quem chamou o metodo fala
    //seria a mesma coisa que dar um console.log(p1.nome)
    return{
        nome, sobrenome,

        // Setter (para settar um atributo)
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift();
            this.sobrenome = valor.join();
        },

        fala(assunto){
            return`${this.nome} pesa ${this.peso}, tem ${this.altura}m e está ${assunto}.`
        },

        peso: peso,
        altura: altura,

        //get faz um metodo(ou função) se passar por um atributo do obj
        // Getter
        get imc() {
            const index = this.peso / (this.altura ** 2);
            return `${nome} tem o IMC de ${index.toFixed(2)}`
        }
    };
}

const p1 = criaPessoa('Arthur', 'Teixeira', 67, 1.73)
const p2 = criaPessoa('Gustavo', 'Raisc', 52, 1.76)
const p3 = criaPessoa('Marcos', 'Mafia', 83, 1.69)

/* console.log(p1.fala('dormindo'))
console.log(p1.imc)

console.log(p2.fala('trabalhando'))
console.log(p2.imc) */
/* p1.nomeCompleto = 'Gabriel Sumara'
console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala('comendo'))
 */
console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)