/* let cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g, '')
let cpfArray = Array.from(cpfLimpo) */
/* console.log(cpfArray.reduce((ac,val) => ac + Number(val),0)) */
// soma todos os numeros do cpf

function ValidaCpf(cpfEnviado){
   Object.defineProperty(this, 'cpfLimpo',{
    enumerable:true,
    get: function(){ //pega o cpf fornecido na instancia e remove tudo que não seja numero
        return cpfEnviado.replace(/\D+/g, '')
    }
   }) 
}

ValidaCpf.prototype.valida = function(){
    //algumas verificações de basicas como tamanho, sequencia ou vazio
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false
    //pega os 9 primeiros caracteres
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    
    //junta todos os resultados
    const novoCpf = cpfParcial + digito1 + digito2
    //compara se o novo cpf gerado é igual ao antigo selecionado
    return novoCpf === this.cpfLimpo
}

ValidaCpf.prototype.criaDigito = function(cpfParcial){
    //transforma os 9 primeiros numeros em array
    const cpfArray = Array.from(cpfParcial)
    //regressivo recebe o tamanho literal dos 9 digitos (9)
    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac, val) => {
        //o acumulador inicia em 0 e recebe regressivo * valor (valor é cada numero do cpf)
        ac += (regressivo * Number(val)) 
        regressivo--
        return ac
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito)
}

ValidaCpf.prototype.isSequencia = function(){
    //verifica se é uma sequencia
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCpf('090.501.539-84')
if(cpf.valida()){
    console.log('CPF Válido')
} else {
    console.log('CPF Inválido')
}