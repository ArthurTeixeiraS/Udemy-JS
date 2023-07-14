//Objeto Map()
const pessoas = [ //matriz é uma array de objetos
    {id: 3, nome: 'Arthur'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Bruno'}
];
/* const novasPessoas = {}; 
for(const pessoa of pessoas){ //em cada iteração, o objeto da matriz é guardado na "pessoa"
    const {id} = pessoa;  //extração do ID
    novasPessoas[id] = {...pessoa} //preenche o objeto novasPessoas, usando o id de cada objeto da matriz pessoa como nome desse novo objeto
} */

//Dessa forma, a ordem se mantem como a registrada e os "nomes" de cada objeto na matriz ficam como NUMEROS.
const novasPessoas = new Map(); 
for(const pessoa of pessoas){ 
    const {id} = pessoa; 
    novasPessoas.set(id, {...pessoa})
}

/* for (const pessoa of novasPessoas){ //retorna um array para cada objeto na matriz
    console.log(pessoa)
} */

for(const [identifier,{ id, nome }] of novasPessoas){ //desestruturação
   console.log(identifier, id, nome) 
}

/* console.log(novasPessoas.get(1))
console.log(novasPessoas.set(4, {id:4, nome:'Lucas'}))
console.log(novasPessoas) */


