/* Return retorna um valor e termina a função */
function soma(n1,n2){
  return n1+n2  //com isso, pode-se capturar o valor para ser utilizado em outros lugares
}
// console.log(soma(1,2)) //com isso, o valor apenas é exibido
let calc = soma(5,4)
/* console.log(calc) */

/* document.addEventListener('click', function() {  //função que faz algo, mas não retorna nada
  document.body.style.backgroundColor = 'red'
}) */

function criaPessoa(nome, sobrenome){
  return {
    nome: nome,
    sobrenome: sobrenome
  };
}
const p1 = criaPessoa('Arthur', 'Teixeira')
/* console.log(typeof p1) */



function falaFrase(comeco){
  function falaResto(resto){
    return comeco + ' ' + resto //usando parametro de uma "função pai"
  }
  return falaResto //retornar uma função sem "()" retorna a função em si
}
const fala = falaFrase('Olá') // já recebe a func com o primeiro parametro preenchido
/* A partir do momento que "olaMundo" recebe uma função literal, ele se torna uma função
 então, podemos usar a variavel "olaMundo" como uma função */
const resto = fala('mundo!') //usando "olaMundo()" como uma função
// como o parametro começo, já veio preenchido, o argumento passado nessa chamada vai para "resto"
/* console.log(resto) */



function criaMultiplicador(multiplicador){
  //mp
  return function(n){
    return n * multiplicador    
  }
}

const duplica = criaMultiplicador(2) //cria a var com o numero que vai ser o multiplicador
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)
  // função closure
console.log(duplica(3)) //chama a var jogando o numero que será multiplicado
console.log(triplica(3))
console.log(quadriplica(3))