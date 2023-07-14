class FormSubmit{
    constructor(settings){
    this.settings = settings
    this.form = document.querySelector(settings.form)
    this.button = document.querySelector('.back-button')
    this.formButton = document.querySelector(settings.button)
    if(this.form){
        this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this)
}
displaySuccess(){
    window.location.href = "assets/html/thanks.html"
}
displayError(){
    alert(this.settings.error)
}
getFormObject(){
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]")
    fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value
    });
    return formObject
}
onSubmission(event){
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerHTML = "Enviando..."
}
async sendForm(event){
    try{
        this.onSubmission(event)
        await fetch(this.url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
            },
            body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
    } catch(error){
        this.displayError();
        throw new Error(error);
    }
}
init(){
    const isValid = new FormCheck()
    if (isValid.events()){
        if (this.form) {
            this.formButton.addEventListener("click", () => this.sendForm()); 
            }
        return this  
        }
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    error: "Não foi possível enviar :("
});
formSubmit.init()