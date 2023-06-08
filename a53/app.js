// Closures é a habilidade de acessar seu escopo léxico
function retornaFuncao(nome){
    /* const nome = 'Luiz' */
    return function(){ //tem closure de "nome "
        return nome
    }
}

const funcao = retornaFuncao('Arthur');
const funcao2 = retornaFuncao('Luiz'); // o closure pode se alterado de função pra função
console.dir(funcao())
console.dir(funcao2())