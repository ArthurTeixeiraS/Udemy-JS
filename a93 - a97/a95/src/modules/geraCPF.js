import ValidCPF from './CpfValid'
export default class NewCPF {
   rand(min = 100000000, max = 999999999){
    return String(Math.floor(Math.random() * (max-min) + min)) //gera uma sequencia de 9 numeros randomicos
   }

   format(cpf){ //formata o cpf para o formato  '000.000.000-00'
    return(
        cpf.slice(0,3)+'.'+
        cpf.slice(3,6)+'.'+
        cpf.slice(6,9)+'-'+
        cpf.slice(9,11)
    )
   }

   generateNewCPF(){ //gera o novo cpf e retorna se for verdadeiro, com base no modulo 'ValidCPF'
    const noDigitCPF = this.rand()
    const digit1 = ValidCPF.generateDigit(noDigitCPF)
    const digit2 = ValidCPF.generateDigit(noDigitCPF+digit1)
    const newCPF = noDigitCPF + digit1 + digit2
    return this.format(newCPF)
    } 
}