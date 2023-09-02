/*let elementos = document.getElementsByTagName("h1");


document.querySelector('.teste')

document.querySelector(".teste ul li")*/

function clicou(){
    console.log('Clicou');
}

let botao = document.querySelector(".bota1")

botao.addEventListener("click", function () {
    clicou();
});


function div(){
    console.log('Aqui é uma div')
    
}

const clicar = () =>{
    console.log('Aqui é diferente!');
}

document.querySelector(".buta2").addEventListener('click', () =>{
    clicar();
})

