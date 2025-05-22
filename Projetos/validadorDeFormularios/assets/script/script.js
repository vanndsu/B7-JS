// ============================
// Seletores de elementos
// ============================

const selects = document.querySelectorAll(".input-select");
const whiteSelect = document.querySelector(".input-select-white");
const phoneInputs = document.querySelectorAll(".code-number input");

const form = document.querySelector(".validator");
const submitButton = document.querySelector(".button");

let enableLiveValidation = false; // Controle da validação em tempo real

// ============================
// Efeito visual: select preenchido
// ============================

selects.forEach((select) => {
  select.addEventListener("change", ({ target }) => {
    target.classList.toggle("has-value", !!target.value);
  });
});

whiteSelect.addEventListener("change", ({ target }) => {
  target.classList.toggle("has-value-white", !!target.value);
});

// ============================
// Lógica principal de validação
// ============================

const formValidator = {
  // --------------------------------
  // Função principal ao enviar
  // --------------------------------
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
      enableLiveValidation = true;
    } else {
      form.submit(); // Tudo válido → envia formulário
    }
  },

  // --------------------------------
  // Validação de regras por campo
  // --------------------------------
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

        case "email":
          if (input.value.trim() !== "") {
            const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
            if (!regex.test(input.value.toLowerCase())) {
              return "Digite um e-mail válido.";
            }
          }
          break;

        case "phone":
          const phoneRegex = /^\(?\d{2}\)?\s?(9?\d{4})-?\d{4}$/;
          if (!phoneRegex.test(input.value)) {
            return "Digite um número válido.";
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

        case "checked":
          if (!input.checked) {
            return "Aceite os termos para continuar.";
          }
          break;

        default:
          console.warn(`Regra desconhecida: "${type}"`);
      }
    }

    return true;
  },

  // --------------------------------
  // Remove mensagens de erro do campo
  // --------------------------------
  removeErrors: (input) => {
    input.classList.remove("input-error");
    const error = input.parentElement.querySelector(".error-message");
    if (error) error.remove();
  },
};

// ============================
// Eventos de envio e digitação
// ============================

// Envio do formulário (click no botão)
submitButton.addEventListener("click", formValidator.handleSubmit);

// Validação em tempo real enquanto digita
const allInputs = form.querySelectorAll("[data-rules]");
allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (!enableLiveValidation) return;

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

// ============================
// Máscara simples: remover não numéricos do telefone
// ============================

phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "");
  });
});
