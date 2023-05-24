const a = {
    nome: 'Luiz',
    sobrenome : "Otavio"
};
/* const b = a; */
const b = {...a}
a.nome = 'Joao';
console.log(b)
console.log(a)