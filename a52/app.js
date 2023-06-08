//escopo léxico
const nome = 'Arthur'

//a prioriadade é sempre para o valor mais perto QUANDO A FUNÇÃO FOR CHAMADA
function falaNome(){
    console.log(nome)
}

function usaFalaNome(){
    const nome = 'Luiz' //nesse caso, continua "Arthur" pois a re-declaração foi feita em outra função
    falaNome() //nada nesse bloco mexe no contexto lexico da func falaNome
}
usaFalaNome();
