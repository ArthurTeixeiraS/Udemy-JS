function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){ //emula como se fosse um metodo 
            return `${this.nome} ${this.sobrenome}`    
        }
    }
}

class Pessoa {  
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
        Object.freeze(this)
    }
}

//palavra new cria um {} vazio, atrela e retorna a palavra this a constante utilizada (p1, p2)
const p1 = new Pessoa('Luiz', 'Miranda')
/* Object.freeze(p1) */ //freeza o objeto
p1.nome='Arthur' //Não funcionará
p1.fala = function(){console.log('Oi')}
console.log(p1)
const p2 = criaPessoa('Bruno', 'Miguel')
console.log(p2.nomeCompleto)
