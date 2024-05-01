function clicou() {
  let teste = document.querySelector("#teste");
  let ul = teste.querySelector("ul");

  /*a função append, adiciona um elemento após o elemento selecionado
    sem alterar todo o html do mesmo.(funciona somente para texto)*/
  ul.children[0].append(" - adicionado");

  //ADICIONANDO UM ELEMENTO COM A FUNÇÃO APPEND

  //foi criado um elemento li na memória.
  let newLi = document.createElement("li");
  //adicionando um texto para esse elemento
  newLi.innerText = "Item adicionado com a função append";
  //chamando o elemento usando a função appendChild
  ul.appendChild(newLi);

  /*adicionando um item no começo do elemento(tanto texto ou elemento)
     com a função prepend.*/
  let newwLi = document.createElement("li");
  newwLi.innerText = "Item adicionado com a função prepend";
  ul.prepend(newwLi);

  //adicionando um elemento após o elemento selecionado
  const newButton = document.createElement("button");
  newButton.innerText = "Botão depois";
  ul.after(newButton);

  //adicionando um elemento antes do elemento selecionado
  const newButtonn = document.createElement("button");
  newButtonn.innerText = "Botão antes";
  ul.before(newButtonn);

  //criando uma nova lista
  const newUl = document.createElement("ul");

  for (let i = 0; i < 3; i++) {
    let newLii = document.createElement("li");
    newLii.innerText = `Item ${i} adicionado`;
    newUl.append(newLii);
  }
  ul.after(newUl);
}
