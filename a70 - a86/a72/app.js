//Getters e Setters
    //get pega um valor
    //set setta um valor 
class Produto {
    constructor(nome, preco, estoque ) {
        this.nome = nome;
        this.preco = preco;
        let estoquePrivado = estoque
        // cria o atributo    obj    nome do atr
        Object.defineProperty(this, 'estoque', { //configurações...
            enumerable: true, 
            configurable: true,
            get: function(){ //quando usa get não precisa mandar ()
                return estoquePrivado
            },
            set: function(valor){
                if(typeof valor !== 'number') {
                    console.log('Erro')
                    return;
                }
                estoquePrivado = valor;
    }});
    }
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(`${p1.nome} custa R$${p1.preco}`)
p1.estoque = 30 // o valor "settado" aqui vai ser atribuido ao set, no argumento da função anonima
/* console.log(p1.estoque); //sem () */
console.log(p1.estoque)
