/* const pontuacaoUsuario = 999
if (pontuacaoUsuario >= 1000){
    console.log('Usuário Vip')
} else{
    console.log('Usuário normal')
} */

const pontuacaoUsuario = 1000
const nivelUsuário = (pontuacaoUsuario >= 1000) ? 'Usuário Vip' : 'Usuário Normal'
console.log(nivelUsuário)
// (condicao) ? 'valor true' : 'valor false' 

const corUsuario = 'pink';
const corPadrao = corUsuario || 'Preta'
console.log(nivelUsuário, corPadrao)