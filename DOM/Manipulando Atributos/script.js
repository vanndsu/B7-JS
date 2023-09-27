function clicou() {
  const input = document.querySelector("input"); //pega o primeiro input que encontrar
  const botao = document.querySelector(".bota1");

  console.log(input.getAttribute("type")); //pega o atributo selecionado e diz o que contém nele.

  if (input.hasAttribute("placeholder")) {
    //verifica se existe o atributo selecionado através da função hasAttribute
    console.log("Tem Placeholder");
  } else console.log("Não tem place.");

  //input.setAttribute('type', 'text');//altera o conteudo do atributo(se não tiver esse atributo, ele adiciona.)
  //na esquerda define o atributor, na direita atribui um conteúdo.

  if (input.getAttribute("type") === "text") {
    input.setAttribute("type", "password");
    botao.innerText = "Ocultar senha";
  } else {
    input.setAttribute("type", "text");
    botao.innerText = "Mostrar senha";
  }
}
