//Filter -> sempre retorna um array
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

/* function callbackFilter(valor){
    return valor > 10 //VAI RETORNAR TRUE, POIS A CONDIÇÃO RETORNA TRUE
} */
                                        //sempre nessa ordem
const menoresQue10 = numeros.filter(valor => valor > 10) //simplificando como função anonima arrow
/* console.log(menoresQue10) */


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosa', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const cincoLetras = pessoas.filter(obj => obj.nome.length >= 5)
const maisCinquenta = pessoas.filter(obj => obj.idade > 50)
const terminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))

console.log(terminaComA)

