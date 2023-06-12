//metodo Splice
const nomes = ['Maria', 'João', 'Gabriel', 'Julia']
/*
    nomes.splice(inicio(indice), delete, ...adicionar)

 */           

nomes.splice(4, 0, 'Gustavo', 'Junior', 'Rafael');

/* console.log(nomes, teste) */ //retorna um array

// Number.MAX_VALUE é o tamanho maximo do array
// o primeiro argumento não conta com os valores adicionados na mesma linha
//                 -5      -4        -3         -2        -1
//                  0       1         2          3         4
//const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia']

//simulando pop
nomes.splice(-1, 1)  

//simulando shift
nomes.splice(0, 1)

//simulando push
/* nomes.splice(-1, 0, 'Mario') */
nomes.push('Mario')
console.log(nomes)
//simulando unshift
nomes.splice(0, 0, "Bruno")

