class FormCheck {
    constructor(){
        this.form = document.querySelector('.formulario');
    }

    events(){
        this.form.addEventListener('submit', (e) => {
        this.handleSubmit(e);
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const validCamps = this.checkFields();
        const validPassword = this.checkPassword();
        if(validCamps && validPassword){
            alert('Formulário enviado')
            this.formulario.submit();
        }
    }
    checkFields(){
      let valid = true;
      for(let errorText of this.form.querySelectorAll('.error-text')){
        errorText.remove();
      }
      for (let camp of this.form.querySelectorAll('.validar')){
        const label = camp.previousElementSibling.innerText;
        if(!camp.value){
            this.createError(camp, `"${label}" não pode estar em branco`)
            valid = false;
        }
        if (camp.classList.contains('cpf')){
            if(!this.validCpf(camp)) valid = false;
        }
        if (camp.classList.contains('usuario')){
            if(!this.validUser(camp)) valid = false;
        }
      };
      return valid;
    }

    validUser(camp){
    const user = camp.value;
    let valid = true;
    if (user.length < 3 || user.length > 12){
        this.createError(camp, 'Usuário precisa ter entre 3 e 12 caracteres')
        valid = false;
    }
    if (!user.match(/^[a-zA-Z0-9]+$/g)){
        this.createError(camp, 'Usuário com caracteres invalidos')
        valid = false;
    }
    return valid;
    }


    validCpf(camp){
        const cpf = new CpfValid(camp.value);
        if(!cpf.isValid()){
            this.createError(camp, 'CPF Inválido')
            return false
        } else {
            console.log('Cpf Válido')
            return true;
        }
    

    }
    checkPassword(){
        let valid = true;
        const password = this.form.querySelector('#input-teste-5')
        const repeatPassword = this.form.querySelector('#input-teste-6')
        if (password.value !== repeatPassword.value){
            valid = false;
            this.createError(password, 'Campos senha e repetir senha precisam ser iguais')
            this.createError(repeatPassword, 'Campos senha e repetir senha precisam ser iguais')
        }
        if (password.value.length < 6 || password.value.length > 12){
            this.createError(password, 'Senha precisa estar entre 6 e 12 caracteres')
        }
    }

    createError(camp, msg){
       const div = document.createElement('div');
       div.innerHTML = msg;
       div.classList.add('error-text')
       camp.insertAdjacentElement('afterend', div)
       
    }
}