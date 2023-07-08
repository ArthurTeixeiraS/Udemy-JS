class ValidaCpf{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            value: cpfEnviado.replace(/\D+/g, ''),
            configurable:false,
            enumerable:true
        })
    }
    isSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false; 
        if(this.isSequencia()) return false;
        this.geraNovoCpf()
        console.log(this.novoCpf)
        return this.novoCpf === this.cpfLimpo;
    }
    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigito(cpfSemDigitos)
        const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1)
        this.novoCpf = cpfSemDigitos + digito1 + digito2
    }
    static geraDigito(cpfSemDigitos){
        let total = 0
        let reverso = cpfSemDigitos.length + 1;
        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica)
            reverso--
        }
        const digito = 11 - (total % 11);
        return digito <= 9?digito:'0'
    }
}
let cpf = new ValidaCpf('090.501.539-84')
if (cpf.valida()) return console.log('CPF Válido')
if (!cpf.valida()) return console.log('CPF Inválido')