// ===========================
// Aplicação de estilo em selects ao selecionar valor
// ===========================

// Selects do lado esquerdo (fundo branco)
const selects = document.querySelectorAll(".input-select");

// Select do lado direito (fundo roxo)
const selectWhite = document.querySelector(".input-select-white");

// Aplica classe 'has-value' se houver valor nos selects do lado esquerdo
selects.forEach((select) => {
  select.addEventListener("change", ({ target }) => {
    target.classList.toggle("has-value", !!target.value);
  });
});

// Aplica classe 'has-value-white' no select do lado direito
if (selectWhite) {
  selectWhite.addEventListener("change", ({ target }) => {
    target.classList.toggle("has-value-white", !!target.value);
  });
}

// ===========================
// Validador de formulário
// ===========================

const form = document.querySelector(".validator");
const submitButton = document.querySelector(".button");

// Objeto principal de validação
const formValidator = {
  // Intercepta o envio do formulário
  handleSubmit: (event) => {
    event.preventDefault();

    let isValid = true;
    const inputs = form.querySelectorAll("[data-rules]");

    inputs.forEach((input) => {
      const validationResult = formValidator.validateInput(input);
      if (validationResult !== true) {
        isValid = false;

        // Remove mensagens anteriores
        formValidator.removeErrors(input);

        // Cria e insere a mensagem de erro
        input.classList.add("input-error");

        const errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        errorElement.innerText = validationResult;
        input.parentElement.appendChild(errorElement);
      }
    });

    if (isValid) {
      form.submit(); // Submete se tudo estiver validado
    }
  },

  // Verifica regras de um input individual
  validateInput: (input) => {
    const ruleAttr = input.getAttribute("data-rules");
    if (!ruleAttr) return true;

    const rules = ruleAttr.split("|");

    for (const rule of rules) {
      const [type, value] = rule.split("=");

      switch (type) {
        case "required":
          if (input.value.trim() === "") {
            return "O campo precisa ser preenchido.";
          }
          break;
        case "required-two":
          if (input.value.trim() === "") {
            return "Os dois campos precisam ser preenchidos.";
          }
          break;

        case "min":
          if (input.value.length < parseInt(value)) {
            return `O campo deve ter pelo menos ${value} caracteres.`;
          }
          break;

        case "select-required":
          if (!input.value) {
            return "Selecione uma opção válida.";
          }
          break;

        default:
          console.warn(`Regra desconhecida: "${type}"`);
      }
    }

    return true;
  },
  removeErrors: (input) => {
    input.classList.remove("input-error");
    const error = input.parentElement.querySelector(".error-message");

    if (error) {
      error.remove();
    }
  },
};

// Dispara a validação no clique do botão
submitButton.addEventListener("click", formValidator.handleSubmit);
