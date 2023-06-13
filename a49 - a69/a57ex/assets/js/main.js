function criaCalculadora(){
    return{
        display:document.querySelector('.display'),

        inicia(){
            this.clickBotoes();
            this.pressionaEnter();
            
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
               if(e.keyCode === 13){
                this.realizaConta()
               } 
            })
        },

        realizaConta(){
            let conta = this.display.value;
            try{
              conta = eval(conta);  //PERIGO!!! FUNÇÃO USADA PARA FINS DIDÁTICOS
              if(!conta){
                alert('Conta inválida')
              }
              this.display.value = String(conta)
            }catch(e){
              alert('Conta inválida')  
            }

        },

        clearDisplay(){
          this.display.value = ''  
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1)
        },


        clickBotoes(){
            //this -> calculadora
            document.addEventListener('click', function(e){ //poderia usar uma arrow function para evitar que o this mudasse
                const el = e.target;
                //this -> document
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
                this.display.focus();
            }.bind(this)) //bind faz com que o a função de captura use o this da clickBotoes()
                
        },

        btnParaDisplay(valor){
            this.display.value += valor
        }
    }
}
const calculadora = criaCalculadora();
calculadora.inicia();