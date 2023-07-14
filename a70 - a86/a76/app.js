// Camiseta, Caneca, Lápis -> Produto -> Aumento e desconto
//   Cor        Material
function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

//Camiseta herda as propriedades de produto e usa "call" para executar Produto no contexto this
function Camiseta(nome, preco, cor){
   Produto.call(this, nome, preco) 
   this.cor = cor //extendendo os atributos
}
//Camiseta.prototype herda Produto.prototype (nome, preco, cor (alem dos metedos aumento e desconto))
Camiseta.prototype = Object.create(Produto.prototype)

/* Camiseta.prototype.constructor = Camiseta */
// se essa linha de cima estivesse ativa, o construtor de camiseta realmente seria Camiseta.

//Criando metodos dentro de prototype de Camiseta
Camiseta.prototype.aumento = function(percentual){
     this.preco = this.preco + (this.preco * (percentual/100))
}
Camiseta.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100))
}

function Caneca(nome, preco, cor, material, estoque){
    Camiseta.call(this, nome, preco, cor)
    this.material = material
    
    Object.defineProperty(this, 'estoque',{
        enumerable:true,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
/* Caneca.prototype.constructor = Caneca; */
Caneca.prototype.mudaMaterial = function(material){
    this.material = material
}

const produto = new Produto('Generico', 50, 'Verde')

const camiseta = new Camiseta('Regata', 100, 'Preta')
console.log(camiseta)
console.log(produto)
const caneca = new Caneca('Caneca Pequena',25,'Vermelha','Porcelana',10)
console.log(caneca) 


