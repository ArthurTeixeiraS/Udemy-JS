import * as MeuModulo from './modulo1.js'
import qualquerNome from './modulo1.js'
//prioridade ao default

const p1 = new MeuModulo.Pessoa(MeuModulo.nome, MeuModulo.idade)
console.log(p1)

console.log(MeuModulo.nome)
console.log(MeuModulo.sobrenome)
console.log(MeuModulo.idade)

console.log('idade: '+MeuModulo.meuObjeto.idade)
console.log(qualquerNome(5,3))
console.log(MeuModulo.default(5,10))
//da pra acessar por aq tmb