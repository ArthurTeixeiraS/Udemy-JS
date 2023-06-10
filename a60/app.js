//Função Recursiva //existe um limite
function recursiva(max){
    console.log(max)//mostra o max
    if(max >= 10) return; //se max for menor que 10...
    max++; //max + 1
    recursiva(max) // chama a propria função com o max incrementado
}
recursiva(-10)