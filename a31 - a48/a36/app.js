//                0       1       2
const frutas = ['Pera', 'Uva', 'Maça']
/* for (let i = 0; i < frutas.length; i++ ){
    console.log(frutas[i])
} */
/* for (let i in frutas){   //le os indices, e não é uma concatenação
    console.log(frutas[i])
}
for (let i in frutas){    //i = indice do vetor, fruta[i] valor do indice 
    console.log(i)
} */

const pessoa = {
    nome:'Arthur',
    sobrenome: 'Texeira',
    idade: 17
};
/* for(let i in pessoa){
    console.log(i)
} */
/* for(let i in pessoa){  // i = nome do atributo pessoa[i]= valor do atributo
    console.log(i+' '+pessoa[i])
} */

const chave = 'nome';
console.log(chave, pessoa[chave]) //acessando atributos do objeto dinamicamente