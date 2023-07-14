class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já Ligado`)
            return
        }
        this.ligado = true;
        return
    }
    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já Desligado`)
            return
        }
        this.ligado = false;
        return
    }
}
class SmartPhone extends DispositivoEletronico{
 constructor(nome, cor, modelo){
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
 }   
}
class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi, tamanho){
    super(nome);
    this.temWifi = temWifi;
    this.tamanho = tamanho;
    }
    ligar(){
        console.log('Olha, você alterou o metodo')
    }
}
const disp = new SmartPhone('Samsung', 'Preto', 'GalaxyS20')
const disp2 = new Tablet('Samsung', 'Sim', 'Grande')
/* console.log(disp)
disp.ligar()
console.log(disp)
disp.desligar()
console.log(disp) */
console.log(disp2)
disp2.ligar()
