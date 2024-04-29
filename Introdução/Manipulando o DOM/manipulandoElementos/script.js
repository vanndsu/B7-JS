let butao = document.querySelector('button')
butao.addEventListener('click',()=> {console.log('Foda!')})
let div = document.querySelector('#teste')

//pega a div inteira
butao.addEventListener('click',()=>console.log(div))

//pega os 'flhos' imediatos da div e retorna um array com os elementos
butao.addEventListener("click", () => console.log(div.children));

//pega o  primeiro 'flho' da div e seus elementos
butao.addEventListener("click", () => console.log(div.children[0]));

//pega os elementos do primeiro filho da div e retorna um array.
butao.addEventListener("click", () => console.log(div.children[0].children));

//selecionando o elemento UL
const ul =  document.querySelector('ul')

//printando o conteúdo contido no elemento.
butao.addEventListener("click", () => console.log(ul.innerHTML));

//pega todo o conteúdo de UL, incluindo ele próprio.
butao.addEventListener("click", () => console.log(ul.outerHTML));

//alterando o HTML do elemento UL
butao.addEventListener("click", () => ul.innerHTML = ul.innerHTML + "<li>É POPOTE</li>");

//alterando todo o HTML do elemento UL
//butao.addEventListener("click", () => ul.outerHTML = '<strong>teste</strong>');

//altera somente o texto do 'filho' 1 do elemento UL
butao.addEventListener("click", () => ul.children[0].innerText = 'KKKK');

//alterando o texto do elemento H1
butao.addEventListener("click", () => document.querySelector("h1").innerText = 'É o popote');