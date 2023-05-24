/* const tresHoras = 60*60*3*1000
const umDia =  60*60*24*1000
const data = new Date(0 + tresHoras + umDia); */
/* const data = new Date(2023, 4, 10, 17, 9, 27, 500) //ano, mes, dia, hora, min, sec, msec
console.log(data.toString()) */

/* const data = new Date('2023-04-10 17:15:59.00')
console.log(data.getDate())
console.log(data.getHours())
console.log(data.getFullYear())
console.log(data.getMonth()+1)
console.log(data.getMinutes())
console.log(data.getSeconds())
console.log(data.getMilliseconds())
console.log(data.getDay())

console.log(data) */
function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`

}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}
const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)