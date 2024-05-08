
//o parametro nessa ocasião pode ser oque desejar.
function soltou(event){

    //mostra o código da tecla apertada
    console.log(event.code)

    //mostra a tecla apertada
    console.log(event.key)

    //como saber se uma outra tecla tava pressionada
    console.log('Shift?:'+ event.shiftKey)
    console.log('Crtl?:'+ event.ctrlKey)
    console.log('Alt:'+ event.altKey)
}

const input = document.querySelector('input')

input.addEventListener('keyup',soltou)
