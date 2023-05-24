/* console.log('Maria' && 0 && 'João') */ // mostra o ultimo checado

//false values
/* False, 0, "",'',``, NaN, Null, Undefined */

/* console.log('Maria' && '' && 'João')
console.log('Maria' && NaN && 'João')
console.log('Maria' && null && 'João')
console.log('Maria' && undefined && 'João')
 */


/* function falaOi(){
    return 'Oi'
}
let vaiExecutar = 'J';
console.log(vaiExecutar && falaOi()); */

/* console.log(0 || false || null || 'Luiz' || true)  */

const corUsuario = 'red';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao)

