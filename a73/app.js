/*  Object.values
    Object.entries
    Object.assign(destino, any)
    Object.getOwnPropertyDescriptor(objeto, propriedade)
    ... (spread)
*/

/* 
    Já vimos...
    Object.keys(Retorna chaves)
    Object.freeze(Trava/Congela o Objeto)
    Object.defineProperties(Define várias propriedades)
    Object.defineProperty(Define uma propriedade)
*/
const produto = {nome: 'Caneca', preco: 10.50};
const outraCoisa = produto

produto.nome = 'Xícara' 
/* console.log(outraCoisa) */

/* 
    nome da variável -> valor...

    produto.nome -> Caneca <- outraCoisa.nome
    //ao mudar produto.nome, você muda o valor para o qual a seta aponta
    //isso vale para as consts tambem, você pode alterar o VALOR que a seta esta apontando, e não a DIREÇÃO da seta
    //para mudar essa condição, usamos Spread Operator (Spread = Espalhar), serve para variáveis, arrays, objetos
    */

const outraOutraCoisa = {
    ...produto,
    material:'Porcelana',
    feedback: function(valor){
        return(`A nota do produto é: ${valor}`)
    }
}
outraOutraCoisa.nome = 'Pires'

/* console.log(produto.nome, outraOutraCoisa.nome)
console.log(`Feitas de: ${outraOutraCoisa.material}`) */
/* console.log(`${outraOutraCoisa.feedback('5.0*')}`) */
      
//                        obj inicial  obj clonado  adicionais..
const caneca = Object.assign({}, produto, {categoria:'Louça'}) //clona e assimila os objetos
console.log(caneca)
/* console.log(Object.keys(caneca)) */
/* Object.freeze(caneca) */


Object.defineProperty(caneca, 'nome', {
    writable:false,
    configurable: false,
    value:'Colher'
})
console.log(Object.getOwnPropertyDescriptor(caneca, 'nome'))
/* console.log(caneca.nome) */

/* console.log(Object.values(caneca))
console.log(Object.entries(caneca)) */

for(let [chave, valor] of Object.entries(caneca)){ //desestruturando array devolvido
    console.log(chave, valor)
}



