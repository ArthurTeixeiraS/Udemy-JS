// Revisão Arrays
const numeros = new Array(1,2,3,4,5)
const nomes = ['Eduardo', 'Maria', 'Joana']
const novoArray = nomes // <- valor passado por referencia, oq mudar em um muda no outro
const newArray = [...nomes] // <- valor copiado, agora são independentes
nomes[2]='João'
/* delete nomes[1] */
console.log(nomes)
console.log(nomes.length) //mostra a quantidade (não o index) de itens na array
/* let removido = nomes.pop(); */ //remove o ultimo item do array. Pode ser usado tmb sem estar atrelado a uma var
/* console.log(removido) */
let removido = nomes.shift(); //remove o primerio e muda os indices
console.log(removido)
/* console.log(nomes) */

nomes.push('Wallace'); //adiciona ao final da array


nomes.unshift('Pedro') //adiciona ao inicio
console.log(nomes)

let novo = nomes.slice(0, 3); //colocar 1 numero a mais no final se quiser o indice 3 bota 4
let novos = nomes.slice(0, -2); //começa no indice 0, até o final -2
console.log(novos)

const nome = 'Arthur Teixeira Serafim'
const novosNomes = nome.split(' ') //corta, ou separa a string com o caractere desejado
console.log(novosNomes)
const newName = novosNomes.join(' ') //transforma array em string
console.log(newName)