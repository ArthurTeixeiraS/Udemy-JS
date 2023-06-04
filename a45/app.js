/* try{
    Q
    console.log(a)
    console.log('Abri')
    console.log('Manipulei e gerou erro')
    console.log('Fechei')
    
    try{
        console.log(b);
    } catch {
        console.log('Deu erro')
    }

} catch (e){
   
    console.log('Tratando o erro')
} finally {
   
    console.log('Finnaly: Eu sempre estarei aqui')
} */
    function retornaHora(data){
        if(data && (!data instanceof Date)){
            throw new TypeError('Esperando instancia Date')
        }

        if (!data){
            data = new Date();
        }

        return data.toLocaleTimeString('pt-BR',{
            hour12:false,
            hour: '2-digit',
            minute: '2-digit',
            seconds: '2-digit'
        });
    }

    const hora = retornaHora();
    console.log(hora)