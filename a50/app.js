// *function* possui uma variavel especial chamada arguments, que sustenta todos os argumentos enviados
// por mais que não tenha sido declarado nenhum paramentro
function funcao(a,b = 2){ //parametros
    /* b = b || 0 */
    console.log(a+b)
}
//funcao(1); //args
    // 0 1 2 3 4 5 6

function funcao2(a,b = 2,c = 4){
    console.log(a+b+c)
}
//funcao2(2, undefined, 20) // para enviar os args a e c utilizando o valor padrao de b usamos undefined
 //    2 + 2default +20 = 24

function funcao3({nome, sobrenome, idade}){
    console.log(nome,sobrenome,idade)
}
/* funcao3({
    nome: 'Arthur',
    sobrenome: 'Teixeira',
    idade: 17
}) */

function funcao4([valor1, valor2, valor3]){
    console.log(valor1,valor2,valor3)
}
/* funcao4(['Arthur','Teixeira', 30]) */

const contas = function(operador, acumulador, ...numeros){ //rest operator pega o resto que veio dos argumentos
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
};
/* contas('+', 0, 20,30,40,50) */

const funcao5 = (...args) => { //usando arguments em arrow function atraves do rest operator
    console.log(args)          // "gambiarra"
}
funcao5('+', 0, 20,30,40,50)