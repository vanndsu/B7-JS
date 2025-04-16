// Seleciona todos os <select> com fundo branco (lado esquerdo)
const selects = document.querySelectorAll(".input-select");

// Seleciona o <select> do lado direito (com fundo roxo)
const selectWhite = document.querySelector(".input-select-white");

// Aplica evento a todos os selects da esquerda
selects.forEach((select) => {
  select.addEventListener("change", (event) => {
    const element = event.target;

    // Se tiver valor, adiciona a classe para mudar cor do texto
    if (element.value) {
      element.classList.add("has-value");
    } else {
      element.classList.remove("has-value");
    }
  });
});

// Aplica evento específico ao select branco do lado direito
selectWhite.addEventListener("change", (event) => {
  const element = event.target;

  // Se tiver valor, aplica classe branca para mudar cor do texto
  if (element.value) {
    element.classList.add("has-value-white");
  } else {
    element.classList.remove("has-value-white");
  }
});
