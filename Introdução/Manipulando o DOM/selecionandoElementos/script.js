//selecionando elementos pela tag
document.getElementsByTagName('h1')
//guardando o elemento em uma variável
let div = document.getElementsByTagName('div');

//selecionando um elemento por seu ID
let div2 = document.getElementById('teste')

//selecionando um elemento por sua classe
let butao = document.getElementsByClassName('buta1')

//selecionando de uma maneira mais especifica usando elementos usados no CSS
//ex:
//dessa maneira será selecioando quem tiver o id teste
let teste = document.querySelector('#teste')

//selecionando um elemento especefico utilizando as camadas como no css
document.querySelectorAll('#testelista2 ul li')

console.log(teste   )

/*OBSERVAÇÃO*/
//SEMPRE QUE FOR RESQUISITADO UMA SELEÇÃO NO PLURAL COMO POR EXEMPLO:
//getElementsByClassName, por mais que só tenha um elemento, será retornado um array.
//no caso do querySelector, no singular, será retornado somente o elemento diretamente.