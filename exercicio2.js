function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.querySelector('#txtano')
   var res = document.querySelector('#res')
   if(fano.value.length == 0 || fano.value > ano){
    alert('Verifique os dados, e tente novamente')
   } else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    if(fsex[0].checked){
        genero = 'Homem'
        if (idade < 2){
            //bebe
        }else if(idade < 13){
            //criança
        }else if(idade < 18){
            //adolescente
        }else if(idade < 60){
            //adulto
        }else{
            //idoso
        }
    } else{
        genero = 'Mulher'
        if (idade < 2){
            //bebe
        }else if(idade < 13){
            //criança
        }else if(idade < 18){
            //adolescente
        }else if(idade < 60){
            //adulto
        }else{
            //idoso
        }
    }
    res.innerHTML = genero

    
   }
}