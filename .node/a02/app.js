const Cachorro = require('./mod1')
const c1 = new Cachorro('Tobby')
c1.latir()
/* 
    ./ => pasta que você está (ir pra frente)
    ../ => pula pasta para trás
*/
const path = require('path')
console.log(__filename)
console.log(__dirname)
console.log(path.resolve(__dirname, '..', '..', 'arquivos'))