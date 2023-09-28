function clicou() {
  const button = document.querySelector("button");

  /*
  button.classList.add('verde')//atibui uma classe ao elemento selecionado
  button.classList.remove('azul')//remove a classe especificada do elemento selecionado
  */

  //a linha de código abaixo verifica se contém a classe dita dentro da lista de classes, se tiver, troca para a outra dita.
  /*
  if (button.classList.contains("azul")) {
    button.classList.remove("azul");
    button.classList.add("verde");
  } else {
    button.classList.remove("verde");
    button.classList.add("azul");
    
  }
  */
 
  //forma simplificada do código a cima.
  if (button.classList.contains("azul")) {
    button.classList.replace("azul", "verde");
  } else {
    button.classList.replace("verde", "azul");
  }

  //button.classList.toggle('verde')//a função toggle, remove a classe especificada se tiver, se não tiver, adiciona.
}
