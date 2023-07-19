import ValidCPF from './CpfValid'
export default class NewCPF {
   rand(min = 100000000, max = 999999999){
    return String(Math.floor(Math.random() * (max-min) + min))
   }
   generateNewCPF(){
    const noDigitCPF = this.rand()
    const digit1 = ValidCPF.generateDigit(noDigitCPF)
    const digit2 = ValidCPF.generateDigit(noDigitCPF+digit1)
    const newCPF = noDigitCPF + digit1 + digit2
    return newCPF
    } 
}