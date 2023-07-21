//Promisses
function aleatorio(min, max){ //função para randomizar 
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()*(max-min)+min)
}
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{ //cria-se uma nova promisse com esses 2 parametros, (nomes padrões)
    //resolve: para 'resolver' Promisses 
    //reject: para caso de algum erro na Promisse
        if (typeof msg !== 'string') reject(new Error('Bad Value'))//definindo o que acontecerá no reject
        setTimeout(() => {
           resolve(msg); //definindo o que será feito com o resolve
        }, tempo)
    });
}

//function(arg1, "arg2").then(params => {...}).then(params =>{...}).catch(params => {...})
esperaAi("Conexão com o BD", aleatorio(1, 3))
.then(resposta => { //then() chama o resolve
    console.log(resposta)
    return esperaAi('Buscando Dados da BD', aleatorio(1, 3))
}).then(resposta => {
    console.log(resposta)
    return esperaAi('Tratando os dados da BD', aleatorio(1, 3))
}).then(resposta => {
    console.log(resposta)
}).then(()=>{
    console.log('Exibição de dados')
    return esperaAi(123012301, aleatorio(1,3))
}).then(resposta => {
    console.log(resposta)
})
.catch(error =>{ //catch chama o reject
    console.log('Erro:',error)
})
/* resolve(msg) === then(resposta => {...}) */
/* reject(new Error('Bad Value')) === catch(error =>{...}) */

console.log('Isso virá antes de qualquer promisse')
