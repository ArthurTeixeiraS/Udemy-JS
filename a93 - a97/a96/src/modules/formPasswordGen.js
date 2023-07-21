import genPassword from "./generators";

const passwordGen = document.querySelector('.senha-gerada');
const charQtd = document.querySelector('.qtd-caracteres');
const chkUppercase = document.querySelector('.chk-maiusculas');
const chkLowercase = document.querySelector('.chk-minusculas');
const chkNumbers = document.querySelector('.chk-numeros');
const chkSymbols = document.querySelector('.chk-simbolos');
const btnGenPassword = document.querySelector('.gerar-senha');

export default function() {
    btnGenPassword.addEventListener('click', () =>{
        passwordGen.innerHTML = generatePassword();
    })
}

function generatePassword() {
    const password = genPassword(
        charQtd.value,
        chkUppercase.checked,
        chkLowercase.checked,
        chkNumbers.checked,
        chkSymbols.checked
    );
    return password || 'Nada selecionado.';

}