//elementos

const ul = document.querySelector('ul');
const input = document.querySelector('input')
const button = document.querySelector('button')
const sbutton = document.querySelector('.sbutton')

//funções

function qualquer(Event){
    if(Event.key === 'Enter' && input.value != ''){
       let newLi = document.createElement('li')
       newLi.innerHTML = input.value;
       ul.append(newLi)
       input.value = ''
    }else console.log('Não apertou')
}
function enviar(){
    if(input.value != ''){
        let newLi = document.createElement('li')
        newLi.innerHTML = input.value;
        ul.append(newLi)
        input.value = ''
     }else console.log('Não apertou')
}

const apaga = () =>{
    ul.removeChild(ul.lastElementChild);//remove o último elemento
}
//eventos

input.addEventListener('keyup',qualquer);
button.addEventListener('click',enviar);
sbutton.addEventListener('click',apaga);