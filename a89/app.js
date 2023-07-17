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
           resolve(msg); 
           return
        }, tempo)
    });
}
/* esperaAi('Fase 1', aleatorio(0, 3))
    .then(valor => {
        console.log(valor)
        esperaAi('Fase 2', aleatorio(0, 3))
            .then(valor => {
                console.log(valor)
                esperaAi('Fase 3', aleatorio(0,3))
                    .then(valor =>{
                        console.log(valor)
                    })
            })
    }).catch(e => console.log(e)) */

    //async permite uso de await 
    async function executa(){
        try {
        const fase1 = esperaAi('Fase 1', 800) //fase1 = o resultado da execução da promisse
            console.log(fase1)
        
            setTimeout(function(){
                console.log('Essa promisse estava pendente', fase1)
            },1100)

        const fase2 = await esperaAi('Fase 2', aleatorio(1,3))
            console.log(fase2)
        const fase3 = await esperaAi('Fase 3', aleatorio(1,3))
            console.log(fase3)
        console.log('Terminamos na fase: ',fase3)
        } catch (e){ //QUANDO O ERRO FOR ACHADO cai no bloco catch
            console.log(e)
        }
    }
    executa();

     //pending -> pendente
     //fullfilled -> resolvida
     //rejected -> rejeitada