const rand = (min, max) => Math.floor(Math.random()*(max-min)+min);
const genUpperCase = ()=> String.fromCharCode(rand(65,91));
const genLowerCase = ()=> String.fromCharCode(rand(97,123));
const genNumber = ()=> String.fromCharCode(rand(48,58));
const symbols = ',.;~^[]{}!@#$%&*()_+=-';
const genSymbols = ()=> symbols[rand(0, symbols.length)];

export default function genPassword(qtd, uppCase, lowCase, numbers, symbols){
    const passwordArray = [];
    qtd = Number(qtd)
    for(let i = 0; i < qtd; i++){
        uppCase && passwordArray.push(genUpperCase())
        lowCase && passwordArray.push(genLowerCase())
        numbers && passwordArray.push(genNumber())
        symbols && passwordArray.push(genSymbols())
    }
    return passwordArray.join('').slice(0, qtd)
}
