//Funções Imediatas (IIFE)

/* function qlqrCoisa(){
    console.log(11232)
}
qlqrCoisa(); */

const nome = 'Gabriel';

(function(idade, peso, altura){
    function falaOi(nome){
        const frase = `Olá, bom dia ${nome}`
        console.log(frase)
    }
    falaOi(nome)
    console.log(idade, peso, altura)
})(17, 67, 1.73); //função chamada automaticamente na execução do script

(function Olá(nome){
    console.log(nome)
})('a')