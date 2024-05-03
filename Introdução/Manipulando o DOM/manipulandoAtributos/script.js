const clicou = () => {
  const input = document.querySelector("input");
  const butao = document.querySelector(".botao");

  //pegará o atributo type do elemento selecionado
  console.log(input.getAttribute("type"));
  //pegará o atributo placeholder do elemento selecionado
  console.log(input.getAttribute("placeholder"));

  //função para saber se há o atributo
  if (input.hasAttribute("placeholder")) {
    console.log("Tem esse atributo sim");
  } else console.log("Não tem oh");

  //alterando a propriedade do atributo.
  //no exemplo abaixo está alterando o type do input para um tipo text
  //input.setAttribute("type", "text");

  //no exemplo abaixo é feito a verificação do type e feito a troca com as condições
  if (input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
    butao.innerText = "esconder senha";
  } else {
    input.setAttribute("type", "password");
    butao.innerText = "mostrar senha";
  }
};
