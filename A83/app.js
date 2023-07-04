//getter e setter com classes
/* No JavaScript, Symbol é um tipo de dado primitivo introduzido no ECMAScript 2015 (ES6). 
Ele é usado para criar valores únicos e imutáveis, conhecidos como 
símbolos. Um símbolo é diferente de uma string ou número, pois 
é garantido ser único, o que significa que dois símbolos nunca 
serão iguais. */

const _velocidade = Symbol('velocidade') //forma de criar uma propriedade não enumeravel, que vai armazenar a velocidade de modo "privado"
//tambem ajudando a evitar colisões de nomes de propriedades e indicando que a propriedade deve ser tratada como "privada".
class Carro {
    constructor(nome){
        this[_velocidade] = 0;
        this.nome = nome;
    }
    set velocidade(valor){ //setta valor no Symbol velocidade
        /* console.log("Setter") */
        if (typeof valor !== 'number')return;
        if (valor >= 100 || valor <= 0)return;
        this[_velocidade] = valor;
    }
    get velocidade(){  //quando o programa pedir "Carro.velocidade()" o valor retornado vai ser [_velocidade]
        /* console.log("Getter") */
        return this[_velocidade] 
    }
    acelerar(){
        if (this[_velocidade] >= 100) return
        this[_velocidade]++;
    }
    freiar(){
        if (this[_velocidade] <= 0) return
        this[_velocidade]--;   
    }
}
const carro1 = new Carro('Fusca');
for(let i = 0; i <= 200; i++){
    carro1.acelerar();
}
for(let i = 0; i <= 50; i++){
    carro1.freiar();
}
/* carro1.velocidade = 2000 */  //setter
/* console.log(carro1.velocidade) */; //getter

/* -------------------------------------------------- */

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto(){
        return this.nome+' '+this.sobrenome; //"getta" os parametros e concatena
    }
    set nomeCompleto(valor){ 
        valor = valor.split(' '); //'splitta' a string em 2 valores dentro de 1 array
        this.nome= valor.shift(); // remove e retorna o primeiro elemento do array
        this.sobrenome = valor.join(' '); //combina o que restou na array em string
    }
}
const p1 = new Pessoa('Arthur', 'Teixeira');
p1.nomeCompleto = 'Bruno Miguel Fernandes'
console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)
