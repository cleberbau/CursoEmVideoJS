function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.querySelector('#txtano')
   var res = document.querySelector('#res')
   var img = document.querySelector('#imagem')
   if(fano.value.length == 0 || fano.value > ano){
    alert('Verifique os dados, e tente novamente')
   } else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    if(fsex[0].checked){
        genero = 'Homem'
        if (idade < 2){
            img.src = 'novomodelo/bebem.png'
        }else if(idade < 13){
            img.src = 'novomodelo/criancam.png'
        }else if(idade < 18){
            img.src = 'novomodelo/adolescentem.png'   
        }else if(idade < 60){
            img.src = 'novomodelo/adultom.png'
        }else{
            img.src = 'novomodelo/idosom.png'
        }
    } else{
        genero = 'Mulher'
        if (idade < 2){
            img.src = 'novomodelo/bebef.png'
        }else if(idade < 13){
            img.src = 'novomodelo/criancaf.png'
        }else if(idade < 18){
            img.src = 'novomodelo/adolescentef.png'
        }else if(idade < 60){
            img.src = 'novomodelo/adultof.png'
        }else{
            img.src = 'novomodelo/idosof.png'
        }
    }
    res.innerHTML = genero

    
   }
}