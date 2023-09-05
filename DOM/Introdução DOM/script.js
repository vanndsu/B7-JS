function clicou() {
  const teste = document.querySelector(".teste");
  const ul = teste.querySelector("ul");

  /*ul.innerHTML = `
  <li>Item Alterado</li>
  <li>Item alterado2</li>
  <li>Item alterado2</li>
  `;*/ //alterando a UL toda

  ul.children[0].innerHTML = "Alterado <strong>li 1</strong> "; //alterando somente um filho da UL (o li na posição 0)
}

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
