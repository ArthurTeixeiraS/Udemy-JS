const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e) {  //É LISTENER / (e) é o botão
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    
    if(!peso){ //peso foi declarado como Number, então se não for um Number, é false
        setResultado('Peso Inválido!', false)
        return;
    }
    if(!altura){
        setResultado('Altura Inválida! Não esqueça de escrever com "."', false) // msg, isValid
        return;
    }
    const imc = getImc(peso, altura) //joga as constantes peso e altura para a função getImc()
    const nivelImc = getNivelImc(imc); //joga imc para função
    const msg = `Seu IMC é ${imc} (${nivelImc})`
    setResultado(msg, true) //se passa em todas as condiçoes, o isValid passa true, 
    //o resultado em si é definido nessa função... Mas ele só é "settado" na setResultado()
});

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''; //faz com que a div resultado fique em branco
    const p = criaP(); //faz com que a constante p (desse bloco) receba o return da função criaP()

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }
    
    p.innerHTML = msg //o p (agora já com o paragrafo inserido) recebe o parametro msg
    resultado.appendChild(p); //tudo isso é passado para a div resultado
    /* fica como se fosse:
        <div id resultado>   
        <p>'msg'</p> 
        </div>
    */
}

function criaP(){ // cria uma constante p, que cria um elemento <p> aonde será inserido a mensagem e retorna esse paragrafo
    const p = document.createElement('p');
    return p;
}
function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']
    if(imc >= 39.9) return nivel[5] //não é legal fazer esse tipo de estrutura, mas para simplificar o codigo e a function, vale
    if (imc >= 34.9) return nivel[4]  //a condicional é feita de baixo pra cima nesse caso, pois quando a função da return, ela para imediatamente
    if (imc >= 29.9) return nivel[3]   //"retorna esse valor e pronto", segundo o professor
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
}