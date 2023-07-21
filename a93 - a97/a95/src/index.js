import NewCPF from './modules/geraCPF';
import '../public/assets/css/style.css'
//iife
(function(){
    const newCPF = new NewCPF() 
    const section = document.querySelector('.container')
    let i = 0;
    do{ 
    const result = document.createElement('div')
    result.innerHTML = newCPF.generateNewCPF();
    section.appendChild(result)
    i++
    }while(i<10)

})();