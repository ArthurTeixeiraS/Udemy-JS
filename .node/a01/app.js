const modulo1 = require('./mod1')
const falaNome = modulo1.falaNome
console.log(modulo1)

/* const {nome,sobrenome,falaNome} = require('./mod1') //desestruturando
console.log(falaNome()) */

/* const path = require('path')
const axios = require('axios') */
/* const {Pessoa} = require('./mod1')
const p1 = new Pessoa('Arthur', 'Teixeira', 17)
console.log(p1) */
/* const path = require('path') */


const axios = require('axios')
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e => console.log(e))
