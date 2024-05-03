function clicou() {
  let lill = document.querySelectorAll("li");

  //selecionando o elemento e atribuindo qual atributo css ele desenvolverá.
  //se o atributo tiver um -, como por exemplo background-color.
  //a escrita mudará, será backgroundColor, por exemplo.
  //isso para todos os casos.

  //na função a baixo é usada para percorrer a nodeList que o querySelectorAll retornou.
  // i é referente aos elementos percorridos, ou seja, cada um dos li.
  //a função percorre cada li e atribui o style ou qualquer função passada
  lill.forEach((i) => {
    i.style.backgroundColor = "blue";
  });
}
