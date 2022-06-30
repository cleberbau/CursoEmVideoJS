function carregar(){
var msg = document.querySelector('.msg')
var img = document.querySelector('.paisagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var segundo = data.getSeconds()
msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo} horas.`
if (hora >=0 && hora < 12){
    img.src = 'modelo/manha.png'
    body.style.background = "orange"
    
}else if (hora >=12 && hora < 18){
    img.src = 'modelo/tarde.png'
}else{
    img.src = 'modelo/noite.png'
}
}
