/* const nome = 'Arthur';
let i = 0;
while (i < nome.length ){
    console.log(nome[i])
    i++
}

console.log('Segue a vida...');
 */
function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}
const min = 1;
const max = 20;
let rand = random(min, max);

/* while (rand !== 10){
   rand = random(min, max) // executa a verificação antes do codigo
   console.log(rand)
}
 */
do{
    rand = random(min, max)
    console.log(rand) //executa a verificação depois do código
} while(rand !== 10);