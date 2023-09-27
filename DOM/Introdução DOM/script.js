function clicou() {
  const teste = document.querySelector(".teste");
  const ul = teste.querySelector("ul"); //pegando a primeira lista da div teste
  const ul2 = teste.children[1]; //pegando a segunda lista da div teste

  /*ul.innerHTML = `
  <li>Item Alterado</li>
  <li>Item alterado2</li>
  <li>Item alterado2</li>
  `;*/ //alterando a UL toda

  // ul.children[0].innerHTML = "Alterado <strong>li 1</strong> "; //alterando somente um filho da UL (o li na posição 0)

  //as funções abaixo realiza operações somente "dentro" dos elementos selecionados

  ul2.children[0].innerHTML += "(tudo atualizado)"; //atualiza todo o texto
  ul2.children[1].append("(texto novo)"); //somente adiciona um texto novo no final do elemento selecionado

  //criando uma nova li na ul 1 da div teste (maneira correta)

  let newLi = document.createElement("li");
  newLi.innerText = "Item adicionado!";
  ul.appendChild(newLi); //mesmo principio do append
  //ul.prepend(newLi);//adiciona um texto antes do primeiro elemento selecionado

  //maneira errada de executar a função a cima.
  //ul.innerHTML += '<li>Item adicionado</li>'

  //as funções abaixo adiciona elementos após o elemento dito.

  ul.after("Adicionando um texto"); //adiciona somente um texto após o elemento ul usando a função after

  // o código abaixo cria um botão e adiciona antes do elemento ul, usando a função before
  const botaozinho = document.createElement("button");
  botaozinho.innerHTML = "Botão";
  ul.before(botaozinho);

  //criando uma nova lista a partir do principio a cima.

  let newUl = document.createElement("ul"); //criado uma nova ul na memória
  for (let i = 0; i < 5; i++) {
    //feito um loop para adicionar 5 itens
    let newLi = document.createElement("li"); //criado um li na memória
    newLi.innerHTML = "Item" + (i + 1); //adicionando conteúdo para esse li.
    newUl.append(newLi); //adicionando conteudo na ul.
  }
  ul.after(newUl); //adicionando a nova ul após a ul já criada.
}

//executando a função que está configurada no botão
let botao = document.querySelector(".bota1");

botao.addEventListener("click", function () {
  clicou();
});

/*let elementos = document.getElementsByTagName("h1");


document.querySelector('.teste')

document.querySelector(".teste ul li")*/

/*function clicou() {
  console.log("Clicou");
}*/

/*
function div() {
  console.log("Aqui é uma div");
}

const clicar = () => {
  console.log("Aqui é diferente!");
};

document.querySelector(".buta2").addEventListener("click", () => {
  clicar();
});*/
