//Polimorfismo

//Superclass - classe mãe/pai
function Conta(agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo

}

Conta.prototype.sacar = function(valor){
    if (this.saldo < valor){
        console.log('Saque maior que saldo disponivel!')
        return
    }

    this.saldo -= valor;
    this.verSaldo()
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo();
}
Conta.prototype.verSaldo = function(){
    console.log(`Agência: ${this.agencia} Conta: ${this.conta}/ Saldo: R$${this.saldo.toFixed(2)}`)
}

/* const conta = new Conta('Bradesco', '0909392134', 20000);
conta.verSaldo()
conta.depositar(1000)
conta.sacar(3000)
conta.sacar(18000   ) */

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia,conta,saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype) //o prototipo de CC recebe um objeto com o prototipo de Conta
ContaCorrente.prototype.constructor = ContaCorrente; //define o construtor do objeto ContaCorrente como ContaCorrente. 

//Agora o metodo sacar é re-escrito na função filha (que herda Conta) 
// Isso se chama POLIMORFISMO.
ContaCorrente.prototype.sacar = function(valor){
    if (valor > (this.saldo + this.limite)){
        console.log('Saque maior que saldo disponivel!')
        return
    }

    this.saldo -= valor;
    this.verSaldo()
}
const contaCorrente = new ContaCorrente('Bradesco', '0909392134', 0, 100)
contaCorrente.verSaldo()