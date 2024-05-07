function apertou(){
    console.log('apertou')
    
}
function segurou(){
    console.log('segurou')
}
function soltou(){
    console.log('soltou')
}

const input = document.querySelector('input')

//chamando a função 'segurou' com um evento de teclado onde é pressionado a tecla.
input.addEventListener('keypress',segurou)

document.addEventListener('keydown',apertou)
document.addEventListener('keyup',soltou)
