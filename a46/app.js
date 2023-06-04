function mostraHora(){
    let data= new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12:false
    })
}
const timer = setInterval(function(){ //função anônima
    console.log(mostraHora()); //mostra as horas cada 1000ms
}, 1000);
setTimeout(function(){ 
    clearInterval(timer); //faz com que a const timer pare após 4000ms
}, 4000)
setTimeout(function(){
    console.log('Olá Mundo!'); //exibe apos 5000ms
}, 5000)