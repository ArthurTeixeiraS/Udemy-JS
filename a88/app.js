function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()*(max-min)+min)
}
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{ 
        if (typeof msg !== 'string'){
            reject('erro');
            return
        }
        setTimeout(() => {
           resolve(msg.toUpperCase() +' - Passei na Promise'); 
           return
        }, tempo)
    });
}
//Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
   /* 'Primeiro Valor', */
   esperaAi('Promise 1', aleatorio(1,5)),
   esperaAi('Promise 2', aleatorio(1,5)),
   esperaAi('Promise 3', aleatorio(1,5)),
   /* esperaAi(1000, 100),  *///quando ocorre um erro, nenuma das outras promisses é exibida, apenas a msg de erro 
   /* 'Outro Valor' */
]
/* console.log(promises) */ //retorna "Pending" pois as promisses ainda não foram executadas

/* Promise.all(promises) //faz com que as promisses sejam executadas
.then(function(valor){
    console.log(valor)
})
.catch(function(erro){
    console.log(erro)
}) */


/* Promise.race(promises) //retorna apenas a primeira promise
.then(function(valor){
    console.log(valor)
})
.catch(function(erro){
    console.log(erro)
}) */



function baixaPagina(){
    const inCache = false; 
    if(inCache){
        return Promise.reject('Pagina em Cache');
    }else{
        return esperaAi('Baixei a pagina', aleatorio(1,3))
    }
}
baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch(e => console.log('Erro', e))


 
