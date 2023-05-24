const h1 = document.querySelector('.container h1')
const data = new Date();
const diaSemana = data.getDay()
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)
function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`

}
function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira'
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado'
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Inválido'
            return diaSemanaTexto; 
    }
}

function getMesTexto(mes){
    let mesTexto;
    switch (mes){
        case 1:
            mesTexto = 'Janeiro'
        return mesTexto;
        case 2:
            mesTexto = 'Fevereiro'
        return mesTexto;
        case 3:
            mesTexto = 'Março'
        return mesTexto;
        case 4:
            mesTexto = 'Abril'
        return mesTexto;
        case 5:
            mesTexto = 'Maio'
        return mesTexto;
        case 6:
            mesTexto = 'Junho'
        return mesTexto;
        case 7:
            mesTexto = 'Julho'
        return mesTexto;
        case 8:
            mesTexto = 'Agosto'
        return mesTexto;
        case 9:
            mesTexto = 'Setembro'
        return mesTexto;
        case 10:
            mesTexto = 'Outubro'
        return mesTexto;
        case 11:
            mesTexto = 'Novembro'
        return mesTexto;
        case 12:
            mesTexto = 'Dezembro'
        return mesTexto;
        default:
            mesTexto = ''
        break;   
    }
}
function criaData(data){
    const dia = zeroEsquerda(data.getDate())
    const mes = data.getMonth()+1
    const ano = data.getFullYear()
    const horas = zeroEsquerda(data.getHours())
    const min = zeroEsquerda(data.getMinutes())
    const mesTexto = getMesTexto(mes)
    return `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} <br>${horas}:${min}`
}
h1.innerHTML=criaData(data)