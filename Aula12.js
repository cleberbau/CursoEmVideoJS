/*var idade = 61
if (idade < 16) {
    console.log('Não Vota')
} else if(idade < 18) {
        console.log('Voto Opcional')
}else if(idade > 60){
    console.log ('Voto Opcional')
}else{
    console.log ('Voto Obrigatorio')
}*/

//------------------------------------------------------------
/*var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são Extamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia')
}else if (hora <= 18){
    console.logo ('Boa Tarde')
}else {
     console.log('Boa Noite')
        
}*/

//---------------CONDIÇÃO MÚTIPLA (SWITCH )-----------------------------------
// É OBRIGATÓRIO A UTILIZAÇÃO DO "BREAK"

var agora = new Date()
var diaSem = agora.getDay()
switch(diaSem){
    case 0:
        console.log('Domindo')
        break
     case 1:
        console.log('Segunda')
        break
     case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
}

console.log(diaSem)



 