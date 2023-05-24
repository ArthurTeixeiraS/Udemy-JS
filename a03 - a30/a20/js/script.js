function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    const pessoas = []
   /*  form.onsubmit = function (evento){
        evento.preventDefault
    }; */
    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        pessoas.push({
            nome : nome.value,
            sobrenome : sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas)
        resultado.innerHTML += `${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} <br>`;
    
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();