const nome = 'Arthur';
const sobrenome = 'Teixeira';
const falaNome = ()=> nome+' '+sobrenome

/* falaNome() */
/* exports.NOME = nome;
exports.SOBRENOME = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser falar'  */
/* console.log(module.exports) */

class Pessoa {
    constructor(nome, sobrenome, idade){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.idade = idade
    }
}
/* exports.Pessoa = Pessoa */
module.exports = {
    nome, sobrenome, falaNome, Pessoa
}