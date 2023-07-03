//Composição ou mixing - compõe um objeto com varios outros objetos
//objetos que recebem um metodo
const falar = {
    falar(){
        console.log(`${this.nome} esta falando`)
    }
}
const comer = {
    comer(){
        console.log(`${this.nome} esta comendo`)
    }
}
const beber = {
    beber(){
        console.log(`${this.nome} esta bebendo`)
    }
}
const dormir = {
    dormir(){
        console.log(`${this.nome} esta dormindo`)
    }
}
//um outro objeto, que recebe os objetos que tem metodos
const pessoaPrototype = Object.assign({}, falar, comer, beber) //assimila os objetos criados acima para um novo obj vazio
function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome}, //é mais vantajoso pois podemos configurar o objeto (se é writtable, enumerable, getters e setters)
        sobrenome: {value: sobrenome}
    })

}
const p1 = criaPessoa('Arthur', 'Teixeira')
console.log(p1)
const p2 = criaPessoa('Bruno', 'Fernandes')
console.log(p2)