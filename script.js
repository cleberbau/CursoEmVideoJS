//CURSO EM VIDEO DE JAVASCRIPT COM GUSTAVO GUANABARA

//Aula 4

/*window.alert('Minha Primeira Mensagem!')
window.alert('Esta Dando Certo')
window.prompt('Qual o seu nome?') // 
window.confirm('Você esta Gostando do video?')
*/


//Aula 5 – Variáveis e Tipos Primitivos

/*var n1 = 5 // Number
var n2 = 'JavaScript' //String
var n3 = true //Boolean
var n4 = undefined  //
var n5 = null // Object
var n6 = 3.14 //
typeof n2
string*/

//Aula 6 – Tratamento de dados

/*var nome = window.prompt('Qual é o seu nome?') // Vai perguntar o nome...
window.alert('É um grande prazer em te conhecer, '+ nome + "!" )//Cocatenação*/

var n1 = Number(window.prompt('Digite um número: '))//Convert string to number ou Number.parseInt()
var n2 = Number(window.prompt('Digite outro número: '))
var s = n1 + n2
document.write('A Soma dos valores é' + s)
var s1 = string(window.prompt('Digite seu Nome: '))// Convert number to

/*.toUpperCase()// Deixa as Palavras Grandes
.toLowerCase()// Deixa as Palvras Pequenas
.toFixed()// Estipula a Quantidade de Casas decimais
.length()// Conta os Caracteres
.replace('.', ',')// Substitui um item por outro
.toLocaleString('pt-BR',(style:'currency',currency:'BRL'))// Converte para Moeda Local*/

//Aula 7 – Operadores (Parte1)
5 + 2 = 7//soma
5 - 2 = 3 // subtração
5 * 2 = 10 // multiplição
5 / 2 = 2.5 // divisão
5 % 2 = 1 // resto MMC 
5 **2 = 25// potencial

//Aula 8 -  Operadores (Parte2)
//Relacionais
>
<
>=
<=
== // ver mesmo valor mais não vê se é mesmo tipo
=== // ver memso valor e vê se é memso tipo
!= 
! //Negação
&& // conjunção 'e'
|| //disjunção 'ou'

idade >= 15 && idade <=17 // a idade esta entre 15 e 17 ?
estado == "RJ" || estado == "SP"// o estado é RJ ou SP?
salario > 1500 && sexo != 'M'// o salário é acima de 1500 e não é homem?

//Ternario
? :
media >= 7.0 ? 'Aprovado' : 'Reprovado'




