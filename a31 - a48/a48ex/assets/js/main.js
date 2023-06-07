const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')
//só o basico

function criaLi(){
  const li = document.createElement('li');
  return li  //cria o elemento li
}

function criaTarefa(textoInput){
    const li = criaLi(); //li (desse bloco) recebe o resultado da função
    li.innerHTML = textoInput; // adiciona o texto do input ao li
    tarefas.appendChild(li) //acrescenta a li ao tarefas (ul)
    limpaImput()
    criaBotaoApagar(li)
    salvarTarefa()
}

function limpaImput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerHTML += ' '; //espaçinho entre botão e li
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar essa tarefa')
    li.appendChild(botaoApagar)
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){ //keyCode pego no console, dando um log no "e"
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
        limpaImput()
    }

} )

btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return; //se o valor de input for falso (vazio, nesse caso) nada acontece
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e){
    const el = e.target; //captura o alvo (elemento) do evento
    if(el.classList.contains('apagar')){ //se o elemento possuir a classe 'apagar'
        el.parentElement.remove(); //remove o 'pai' do elemento checado
        salvarTarefa();
    }
})
function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li') //seleciona todas as li
    const listaDeTarefas = [];
    for(let tarefa of liTarefas){ 
        let tarefaTexto = tarefa.innerText; // recebe o texto de tarefa
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim() //remove o apagar
        listaDeTarefas.push(tarefaTexto) //adiciona tarefaTexto a array
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);  //converte a array em uma string json
    localStorage.setItem('tarefas', tarefasJSON);  //  define a chave do e joga a string json para o localstorage
}
function adicionaTarefasSalvar(){
    const tarefas = localStorage.getItem('tarefas') // puxa os itens do localstorage através da chave
    const listaDeTarefas = JSON.parse(tarefas) //converte a string json para uma array
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa); // faz uma repetição para cada item do localstorage, re-criando a tarefa a partir da função
    }
}
adicionaTarefasSalvar() //puxa sempre que a pagina for recarregada