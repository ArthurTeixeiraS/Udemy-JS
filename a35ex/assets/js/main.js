const elementos = [
    {tag:'p', texto: 'Frase 1'}, // 0
    {tag:'div', texto: 'Frase 2'}, // 1
    {tag:'section', texto: 'Frase 3'}, // 2
    {tag:'footer', texto: 'Frase 4'}, // 3
] //elementos que serão exibidos na pag
const container = document.querySelector('.container'); //seleciona a section container na constante container
const div = document.createElement('div'); //cria o elemento div

for(let i = 0; i < elementos.length; i++){ //de i (0) até elementos.length (importante por sem o =, pois o length começa em 1, mas o index em 0)
    let {tag, texto} = elementos[i]; //desmontando elementos(obj) nas variaveis tag e texto, de acordo com os atribustos de elemtentos(obj)
    let tagCriada = document.createElement(tag); // cria um elemento HTML com base na variavel TAG
    tagCriada.innerText = texto; //insere a variável texto dentro da variavel tagCriada, que já possui o elemento HTML criado
    div.appendChild(tagCriada); //insere a variavel tagCraida (já com os dados certos) dentro da div que criamos lá em cima
}
    container.appendChild(div) //joga a div que recebeu todos os dados após as repetições e mostra na tela

