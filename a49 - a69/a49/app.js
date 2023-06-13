//declaração
function falaOi(){
    console.log('Oi')
}
/* falaOi() */
 // First-Class objects (objetos de primeira classe)
 const nome = 'Arthur'
 const souUmDado = function(){
    console.log('Dado')
 }

 function executaFuncao (funcao){  //uma função recebendo outra função
    funcao(); //parametro função passa executando o argumento jogado no chamado da função
 }

 executaFuncao(souUmDado);
 // arrow function 
 const funcaoArrow = () => {
   console.log('Sou uma arrow function')
 }

 executaFuncao(funcaoArrow);

/*  setInterval(function(){  //pode ser usada uma função anonima ou uma função pré-declarada
   
 }, 1000) */

 // Dentro de um objeto
 const obj = {
   falar(){ // ou falar: function()
      console.log('estou falando')
   }
 }
 obj.falar();