let num = [5,8,9,3]
num[4] = 6 //acrescenta uma chave e um valor
num.push(1) // acrescenta um valor na chave seguinte
num.length // conta o numero de array
num.sort() // deixa de forma ordenada
console.log (` Os numeros na array são ${num.sort()}`)

/*for(let pos=0; pos<num.length;pos++){ //Valor inicial; enquanto for verdadeiro; execulta pos
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}*/

//for(let pos in num){
//    console.log(`A posição ${pos} tem valor ${num[pos]}`)
//}
let pos = num.indexOf(1)
if (pos)
console.log(pos)