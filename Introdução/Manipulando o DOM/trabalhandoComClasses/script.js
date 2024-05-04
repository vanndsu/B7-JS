function clicou() {
  const botao = document.querySelector(".button");

  //a função classList retornará um array com as classses do elemento selecionado

  //adiciona uma nova classe ao elemento
  //botao.classList.add("verde");

  //remove uma classe do elemento
  //botao.classList.remove("azul");

  //no código a baixo é verificado se a classe contém no elemento, caso sim, remove e adiciona outra.
  /*if (botao.classList.contains("azul")) {
    botao.classList.remove("azul");
    botao.classList.add("verde");
  } else {    
    botao.classList.add("azul");
  }*/

  //a função replace substitui o código a cima.
  if (botao.classList.contains("azul"))
    botao.classList.replace("azul", "verde");
  else botao.classList.replace("verde", "azul");

  //a função toggle, faz uma verificação. Se tiver a classe, remove, se não tiver, adiciona.
  //botao.classList.toggle('azul')

  console.log(botao.classList);
}
