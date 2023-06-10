class Calculadora{
    constructor(){
        this.display = document.querySelector('.display')

        this.inicia = function(){
            this.clickBotoes();
            this.pressionaEnter()
        };

        this.pressionaEnter = function(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        };

        this.realizaConta = function(){
            let conta = this.display.value;
            try{
                conta = eval(conta)
                if(!conta){
                    alert('Conta inválida!')
                }
                this.display.value = String(conta)
            } catch(e){
                alert('Conta inválida')
            }
        };

        this.clearDisplay = function(){
            this.display.value = ''
        }

        this.deleteOne = function(){
            this.display.value = this.display.value.slice(0, -1)
        };

        this.clickBotoes = function(){
            document.addEventListener('click', e =>{
                const el = e.target;
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
            })
        }

        this.btnParaDisplay = function(valor){
            this.display.value += valor
        }


    }
}
const calculadora = new Calculadora
calculadora.inicia();