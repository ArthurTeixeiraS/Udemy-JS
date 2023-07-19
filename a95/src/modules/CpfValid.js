export default class CpfValid{
    constructor(sendCPF){
        Object.defineProperty(this, 'cleanCPF', {
            writable:false,
            value: sendCPF.replace(/\D+/g, ''),
            configurable:false,
            enumerable:true
        })
    }
    isSequence(){
        return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF
    }
    isValid(){
        if(!this.cleanCPF) return false;
        if(typeof this.cleanCPF !== 'string') return false;
        if(this.cleanCPF.length !== 11) return false;
        if(this.isSequence())return false;
        this.generateNewCPF();
        return this.newCPF === this.cleanCPF;
    }
    generateNewCPF(){
        const noDigitCPF = this.cleanCPF.slice(0, -2);
        const digitOne = CpfValid.generateDigit(noDigitCPF)
        const digitTwo = CpfValid.generateDigit(noDigitCPF + digitOne)
        this.newCPF = noDigitCPF + digitOne + digitTwo;
    }
    static generateDigit(noDigitCPF){
        let total = 0
        let reverse = noDigitCPF.length + 1;
        for(let numericString of noDigitCPF){
            total += reverse * Number(numericString)
            reverse--
        }
        const digit = 11 - (total % 11);
        return digit <= 9 ?digit :'0'
    }
}