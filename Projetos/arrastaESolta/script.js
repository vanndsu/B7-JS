// Variáveis que armazenam o estado atual de cada área
let areas = {
  a: null, // Representa a área "a"
  b: null, // Representa a área "b"
  c: null, // Representa a área "c"
};

// Adiciona eventos de arrastar e soltar aos itens
document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("dragstart", dragStart); // Quando o arrasto começa
  item.addEventListener("dragend", dragEnd); // Quando o arrasto termina
});

// Adiciona eventos às áreas específicas onde os itens podem ser soltos
document.querySelectorAll(".area").forEach((area) => {
  area.addEventListener("dragover", dragOver); // Quando o item é arrastado sobre a área
  area.addEventListener("dragleave", dragLeave); // Quando o item sai da área
  area.addEventListener("drop", drop); // Quando o item é solto na área
});

// Adiciona eventos à área neutra (área sem restrições de posicionamento)
document
  .querySelector(".neutralArea")
  .addEventListener("dragover", dragOverNeutral); // Quando o item é arrastado sobre a área neutra
document
  .querySelector(".neutralArea")
  .addEventListener("dragleave", dragLeaveNeutral); // Quando o item sai da área neutra
document.querySelector(".neutralArea").addEventListener("drop", dropNeutral); // Quando o item é solto na área neutra

// Funções relacionadas ao item que está sendo arrastado
function dragStart(e) {
  console.log("Segurou", e.target); // Loga o item que está sendo arrastado
  e.currentTarget.classList.add("dragging"); // Adiciona uma classe indicando que o item está sendo arrastado
}

function dragEnd(e) {
  console.log("Soltou"); // Loga quando o arrasto termina
  e.currentTarget.classList.remove("dragging"); // Remove a classe "dragging" do item
}

// Funções relacionadas às áreas específicas
function dragOver(e) {
  if (e.currentTarget.querySelector(".item") === null) {
    // Permite o drop apenas se a área não contém um item
    e.preventDefault(); // Impede o comportamento padrão
    e.currentTarget.classList.add("hover"); // Adiciona a classe "hover" para indicar a área ativa
  }
}

function dragLeave(e) {
  e.currentTarget.classList.remove("hover"); // Remove a classe "hover" ao sair da área
}

function drop(e) {
  e.currentTarget.classList.remove("hover"); // Remove a classe "hover" após soltar o item

  if (e.currentTarget.querySelector(".item") === null) {
    // Apenas adiciona o item se a área estiver vazia
    let dragItem = document.querySelector(".item.dragging"); // Seleciona o item que está sendo arrastado
    e.currentTarget.appendChild(dragItem); // Adiciona o item à área
    updateAreas(); // Atualiza o estado das áreas
  }
}

// Funções relacionadas à área neutra
function dragOverNeutral(e) {
  e.preventDefault(); // Permite o drop na área neutra
  e.currentTarget.classList.add("hover"); // Adiciona a classe "hover" para indicar a área ativa
}

function dragLeaveNeutral(e) {
  e.currentTarget.classList.remove("hover"); // Remove a classe "hover" ao sair da área neutra
}

function dropNeutral(e) {
  e.currentTarget.classList.remove("hover"); // Remove a classe "hover" após soltar o item
  let dragItem = document.querySelector(".item.dragging"); // Seleciona o item que está sendo arrastado
  e.currentTarget.appendChild(dragItem); // Adiciona o item à área neutra
  updateAreas(); // Atualiza o estado das áreas
}

// Função que atualiza o estado das áreas e verifica a lógica do jogo
function updateAreas() {
  document.querySelectorAll(".area").forEach((area) => {
    let name = area.getAttribute("data-name"); // Obtém o nome da área
    if (area.querySelector(".item") !== null) {
      // Se a área contém um item, atualiza o estado
      areas[name] = area.querySelector(".item").innerHTML; // Armazena o conteúdo do item na área correspondente
    } else {
      areas[name] = null; // Define como null se a área estiver vazia
    }
  });

  // Verifica se os itens estão nas áreas corretas (a: 1, b: 2, c: 3)
  areas.a === "1" && areas.b === "2" && areas.c === "3"
    ? document.querySelector(".areas").classList.add("correct")
    : document.querySelector(".areas").classList.remove("correct");
  /*
    if (areas.a === "1" && areas.b === "2" && areas.c === "3") {
      document.querySelector(".areas").classList.add("correct"); // Adiciona uma classe indicando que a solução está correta
    } else {
      document.querySelector(".areas").classList.remove("correct"); // Remove a classe se não estiver correto
    }*/

  console.log(areas); // Exibe o estado atualizado das áreas no console
}
