class Produto {
    constructor(nome, preco) {
        this.nome = nome,
        this.preco = preco

    }
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual /100))
    return this.preco
}
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual /100))
}

const p1 = new Produto('Camisa', 50)
/* p1.desconto(100) */
p1.aumento(200)

const p2 = {
    nome: 'Canecas',
    preco: 15 
}

Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(10)
console.log(p2)
console.log(p1)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable:true,
        configurable:true,
        enumerable:true,
        value: 100
    },
    tamanho: {
        writable:true,
        configurable:true,
        value: 'G'
    }

});
p3.aumento(50)
console.log(p3)