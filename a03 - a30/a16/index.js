const alunos = ['Luiz', 'Maria','João']
alunos[0] = 'Eduardo'
alunos[3] = 'Augusto'
console.log(alunos)
console.log(alunos[1])
console.log(alunos.length)
alunos.push('Gabriel')
console.log(alunos)
alunos.unshift('Gustavo')
console.log(alunos)
alunos.pop();
console.log(alunos)
const removido = alunos.shift();
console.log(removido)
/* alunos.shift()
console.log(alunos) */
/* delete alunos[1]
console.log(alunos) */
console.log(alunos.slice(0, 3))
console.log(alunos.slice(0, -2))
console.log(typeof(alunoso))
