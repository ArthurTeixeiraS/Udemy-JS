export const nome = 'Arthur'
export const sobrenome = 'Serafim'
export const idade = 30;
//default pode ser importado com qualquer nome
export function soma (x,y){
    return x+y
}
export class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}
export const meuObjeto = {
    nome:'Gustavo',
    sobrenome:'Raichaski',
    idade: 20
} 

export default (x,y) => x*y
//const não pode ser passada como default na hora da criação, então passamos por aqui
//Tem que exportar pra usar em outros arquivos!
