
//elementos
const input = document.querySelector('input');
const ul = document.querySelector('ul');

//funções
function handleKeyUp(e){

    //se a tecla apertada for igual, execute.
    if(e.key == 'Enter'){
        //ul.innerHTML += `<li>${input.value}</li>`

        //criando um novo li.
        const newLi = document.createElement('li');
        newLi.innerText = input.value;
        
        //adicionando o li no final da lista
        ul.appendChild(newLi)
        
        //zerando o input
        input.value = ''

        
    }
    
}

//eventos
input.addEventListener('keyup',handleKeyUp)

