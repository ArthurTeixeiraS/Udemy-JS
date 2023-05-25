const pessoa = {
    nome: 'Arthur',
    sobrenome: 'Teixeira',
    idade: 17,
    endereco: {
        rua:'Henrique Lage',
        numero: 749,
        bairro:'centro'
    } 
}
/* const {idade, sobrenome, nome} = pessoa // extrair do obj essa chave
console.log(idade)
console.log(sobrenome)
console.log(nome) */

/* const { nome: teste, sobrenome} = pessoa
console.log(teste) */

/* const {endereco: {rua, numero}} = pessoa
console.log(rua, numero)  */

/* const {
    endereco: {
        rua: r, 
        numero: n
    }
} = pessoa
console.log(r,n)  */
const {nome, ...resto} = pessoa;
console.log(resto)