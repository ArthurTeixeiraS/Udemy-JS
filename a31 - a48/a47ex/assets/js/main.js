function clock(){
    function getTimeForSeconds(seconds){ //formata a variavel segundos para formato data
        const data = new Date(seconds * 1000) //multiplica por 1000 para que ms virem segundos
        return data.toLocaleTimeString('pt-BR',{ //define o formato da data
            hour12:false,   //formato de horas
            timeZone: 'GMT'  //fuso-horário
        });
    } 
    const relogio = document.querySelector('.relogio');
    let segundos = 0
    let timer; 
    function clockStart(){
        timer = setInterval(function(){ 
          segundos++; //faz com que a cada segundo a variavel segundo seja incrementada
          relogio.innerHTML = getTimeForSeconds(segundos) //formata a variavel segundos para o formato '00:00:00'
        }, 1000)
    }
    
    document.addEventListener('click', function(e){  //captura de eventos click
        const el = e.target; // variavel que recebe o elemento clicado
        if(el.classList.contains('zerar')){ //"se conter .zerar"
            relogio.classList.remove('pausado') 
            clearInterval(timer); //para o timer
            relogio.innerHTML = '00:00:00' //zera o contador
            segundos = 0   //zera a variável
        } 
        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado') 
            clearInterval(timer) //para o timer para que não ocorra execução dupla/tripla/quadrupla...
            clockStart(); //inicia a função clockStart()
        }
        if(el.classList.contains('pause')){
            relogio.classList.add('pausado')
            clearInterval(timer); //só pausa msm :/
        }
    })
} 
clock();