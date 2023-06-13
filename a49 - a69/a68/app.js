const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
/* const somaDosPares = numeros.filter(valor => valor%2===0).map(valor => valor*2).reduce((ac,valor)=>{return ac += valor},0) */
const somaDosPares = numeros
 .filter(valor => valor%2===0)
 .map(valor => valor*2)
 .reduce((ac,valor)=>{return ac += valor},0) 
console.log(somaDosPares)

//Filter -> Filtrar e Selecionar
//Map -> Mapear e Modificar
//Reduce -> Reduzir, retornar um unico valor
