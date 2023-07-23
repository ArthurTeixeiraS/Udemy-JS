const fs = require('fs').promises
module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w'}) //o 'w' apaga e re-escreve caso exista o 'a' só escreve por cima
}