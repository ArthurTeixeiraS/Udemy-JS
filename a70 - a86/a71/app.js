//defineProperty - defineProperties
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        // o atributo estoque é privado, dessa forma podemos exibi-lo
        Object.defineProperty(this, 'estoque', { //define uma propriedade ao atributo
            enumerable: true, //mostra a key
            value: function(){
                return estoque + 10
            }, //atribui o valor do argumento ao atributo
            writable: false, //pode alterar
            configurable: false //pode configurar (apagar, reconfigurar)
        });

        Object.defineProperties(this,{
            nome :{
                enumerable: true, 
                value: function(){
                return nome + 'Gamer'
                },
                writable: true, 
                configurable: true 
            },
            preco:{
                enumerable: true, 
                value: function(){
                return preco + 5
                },
                writable: true, 
                configurable: true 
            }
        })
    }
}

const produto1 = new Produto('Camiseta', 20, 3)
console.log(produto1.nome())
console.log(produto1.preco())
console.log(produto1.estoque()) 
/* console.log(Object.keys(produto1))

for(let chave in produto1){
    console.log(chave)
} */ 