/* let varA = 'A' //B 
let varB = 'B' //C
let varC = 'C' //A
let aux = varA
varA = varB;
varB = varC;
varC = aux */
let varA = 'A' //B 
let varB = 'B' //C
let varC = 'C'; //A
[varA, varB, varC] = [varB, varC, varA]
console.log(varA,varB,varC)