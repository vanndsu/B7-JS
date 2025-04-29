const selects = document.querySelectorAll(".input-select");
const whiteSelects = document.querySelector(".input-select-white");

selects.forEach((select) => {
  select.addEventListener("change", ({ target }) => {
    target.classList.toggle("has-value", !!target.value);
  });
});

whiteSelects.addEventListener("change", ({ target }) => {
  target.classList.toggle("has-value-white", !!target.value);
});

const form = document.querySelector(".validator");
const submitButton = document.querySelector(".button");

let enableLiveValidation = false; // NOVO: começa como falso

const formValidator = {
  handleSubmit: (event) => {
    event.preventDefault();

    let isValid = true;
    const inputs = form.querySelectorAll("[data-rules]");

    inputs.forEach((input) => {
      const validationResult = formValidator.validateInput(input);
      formValidator.removeErrors(input);

      if (validationResult !== true) {
        isValid = false;
        input.classList.add("input-error");

        const errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        errorElement.innerText = validationResult;
        input.parentElement.appendChild(errorElement);
      }
    });

    if (!isValid) {
      enableLiveValidation = true; // NOVO: ativa validação em tempo real
    } else {
      form.submit(); // Se tudo ok, envia
    }
  },

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

// Agora adiciona o input para todos os campos
const inputs = form.querySelectorAll("[data-rules]");
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (!enableLiveValidation) return; // Só valida se liberado

    const validationResult = formValidator.validateInput(input);

    formValidator.removeErrors(input);

    if (validationResult !== true) {
      input.classList.add("input-error");

      const errorElement = document.createElement("div");
      errorElement.classList.add("error-message");
      errorElement.innerText = validationResult;
      input.parentElement.appendChild(errorElement);
    }
  });
});
