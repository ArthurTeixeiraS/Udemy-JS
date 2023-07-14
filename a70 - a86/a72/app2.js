function criaProduto(nome){
    return{
        get nome(){
            return nome
        },
        set nome(valor){
            valor = valor.replace('coisa.', '')
            nome = valor
        }
    }
}

const p1 = criaProduto('Camiseta')
p1.nome = 'Qualquer coisa.';
console.log(p1.nome)