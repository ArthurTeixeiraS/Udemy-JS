//AJAX - Asynchronous JavaScript and XML
const request = obj => { //nessa função, criamos o xhr (padrão)
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); //define como um objeto nos moldes XMLHttpResquest
        xhr.open(obj.method, obj.url, true); //recebe method e url do request lá em baixo
        xhr.send(); //inicia o envio da requisição
        xhr.addEventListener('load', () => { //captura o evento 'load' (solto quando ativa o link, que ativa a request)
        if(xhr.status >= 200 && xhr.status < 300){
            resolve(xhr.responseText);
        } else{ //captura de erro e sucesso
            reject(xhr.statusText);
        }
    })
    })
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase() //capturando os clicks para ativação da request
    if (tag === 'a'){
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el){
    const href = el.getAttribute('href') //captura do valor do atributo href
    const objConfig = {
        method: 'GET', //"obj.method"
        url: href,
    }
    try{
    const response = await request(objConfig)    //chama a func request enviando um objeto com atributos para a formação do AJAX
    carregaResultado(response)
    } catch(e){
        const resultado = document.querySelector('.resultado')
        console.log(e)
        resultado.innerHTML = 'Erro!'
        
        
    }
    /*   .then(response => {carregaResultado(response)})
    .catch(error => console.log(error)) */
}
function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}