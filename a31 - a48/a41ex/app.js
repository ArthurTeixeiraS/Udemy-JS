function maiorMenor(num1, num2){
    if (num1 > num2) return num1
    if (num2 > num1) return num2
    return(`Os números tem o mesmo valor`) 
}
/* console.log(maiorMenor(31,31)) */

const menorMaior = (num1, num2) => num1 > num2 ? num1 : num2;
console.log(menorMaior(31,20))