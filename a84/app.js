function teste(){
    console.log("Este é meu teste")
}
class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }
    /* 
        Imagine que quando o metodo fosse chamado, 
        todos os controles teriam suas pilhas trocadas.
        Então, não necessitariamos instanciar para chamar esse metodo,
        pois ele mexeria diretamente na classe    
    */
    static trocaPilha(){
        console.log('Trocando...')
        /* console.log(this.tv) */
        /* Não temos acesso aos dados da classe! */
    }
    static soma(x,y){
        return console.log(this) //[class ControleRemoto]
    }
}
const controle1 = new ControleRemoto('Panasonic')
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
/* console.log(controle1); */
ControleRemoto.trocaPilha();
/* Então, utilizamos nomeClasse.metodoStatic para invocar o metodo */
ControleRemoto.soma(5,5)
ControleRemoto.soma('5','5')