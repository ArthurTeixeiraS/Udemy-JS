//Reduce
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
const total = numeros.reduce((acumulador, valor, indice, array) =>{
    acumulador += valor
    return acumulador
},0)
/* console.log(total) */

const pares = numeros.reduce((acumulador, val) =>{ //mais facil fazer com filter
    if(val % 2 === 0) acumulador.push(val);
    return acumulador
},[])
/* console.log(pares) */

const dobro = numeros.reduce((acumulador,val) =>{ //mais facil usar o map
    acumulador.push(val*2)
    return acumulador
},[])
/* console.log(dobro)  */


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosa', idade: 64},
    {nome: 'Wallace', idade: 47}
];

const maisVelho = pessoas.reduce(function(acumulador,val){
    if(acumulador.idade > val.idade) return acumulador
    return val
})

console.log(maisVelho)