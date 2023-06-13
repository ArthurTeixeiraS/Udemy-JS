//Map
//Mapeia e altera um valor
//Usa o valor antigo para gerar um novo
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
const numerosEmDobro = numeros.map(valor => valor*2)
// console.log(numerosEmDobro)
// filtra os multiplos de 5 e triplica                       
const filtroETriplica = numeros.filter(valor => valor%5===0).map(valor => valor*3)
// console.log(filtroETriplica)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosa', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const nomeString = pessoas.map(obj => obj.nome)
/* console.log(nomeString) */
const removeNome = pessoas.map(obj => {return{idade : obj.idade}})
/* console.log(removeNome) */
const adicionaID = pessoas.map((obj, index) => {
   // obj.id = index  caso seja para alterar o array original
   const NovoObj = {...obj}; //copia usando spread operator
   NovoObj.id = index
   return NovoObj
})
console.log(pessoas)
console.log(adicionaID)
