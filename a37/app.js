const nomes = ['Arthur', 'Luiz', 'Ricardo'];
const pessoas = {
    nome:'Arthur',
    sobrenome:'Teixeira',
    idade: 17
}
/* for(let i in nome){
    console.log(i)
}

console.log('#################')

for(let i of nome){ //pega o valor do indice i = 0 e 0 = 'A'
   console.log(i) 
} */

/* nomes.forEach(function(elemento, indice, array){
    console.log(elemento, indice, array)
}); */

for (const i in pessoas) {
    console.log(i, pessoas[i])  
}
