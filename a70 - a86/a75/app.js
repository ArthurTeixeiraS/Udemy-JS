// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
}
// __proto__ : Object.prototype

console.log(objA.__proto__ === Object.prototype)
const objB = {
    chaveB: 'B'
}            
// Ordem: objB -> objA -> Object.prototype

const objC = new Object()
objC.chaveC = 'C'
// agora C está na frente da cadeia

                    //quem qual   
Object.setPrototypeOf(objB,objA)
Object.setPrototypeOf(objC,objB)
console.log(objC.chaveA) //acessando chaves de outros objetos através do prototype
console.log(objC.chaveB) //acessando chaves de outros objetos através do prototype

