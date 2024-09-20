// Adiciona um ouvinte de evento ao corpo da página que detecta quando uma tecla é solta
document.body.addEventListener("keyup", (event) => {
  playMusic(event.code.toLowerCase()); // Chama a função playMusic passando o código da tecla pressionada em letras minúsculas
});

// Adiciona um ouvinte de evento ao botão do compositor que detecta o clique
document.querySelector(".composer button").addEventListener("click", () => {
  let inputComposer = document.querySelector("#input").value; // Obtém o valor digitado no input
  let arrayInputComposer = inputComposer.split(""); // Converte a string do input em um array de caracteres

  playComposer(arrayInputComposer); // Chama a função playComposer passando o array da composição
});

let keysSound = document.querySelectorAll(".key"); // Seleciona todos os elementos com a classe 'key' (teclas visuais)

/* Código comentado para adicionar um ouvinte de clique em cada tecla visual
for(let keyElement of keysSound){
  keyElement.addEventListener('click',()=>{
    console.log(keyElement.getAttribute('data-key')) // Exibe no console o valor do atributo 'data-key'
    playMusic(keyElement.getAttribute("data-key")); // Toca o som correspondente à tecla clicada
  })
}*/

// Alternativa usando forEach para adicionar o ouvinte de clique a cada tecla visual
keysSound.forEach((keyElement) => {
  keyElement.addEventListener("click", () => {
    console.log(keyElement.getAttribute("data-key")); // Exibe no console o valor de 'data-key' da tecla clicada
    console.log(keysSound); // Exibe no console a lista de todas as teclas
    playMusic(keyElement.getAttribute("data-key")); // Chama a função playMusic passando o valor de 'data-key'
  });
});

// Função que toca o som e adiciona o efeito visual à tecla correspondente
function playMusic(keyCode) {
  let soundArquive = document.querySelector(`#s_${keyCode}`); // Seleciona o arquivo de som correspondente ao código da tecla
  let buttonMusic = document.querySelector(`div[data-key='${keyCode}']`); // Seleciona o botão visual correspondente

  if (soundArquive) {
    // Verifica se o arquivo de som existe
    soundArquive.currentTime = 0; // Reseta o áudio para o início
    soundArquive.play(); // Toca o som
  }

  if (buttonMusic) {
    // Verifica se a tecla visual existe
    buttonMusic.classList.add("active"); // Adiciona a classe 'active' para o efeito visual
    setTimeout(() => {
      buttonMusic.classList.remove("active"); // Remove a classe 'active' após 300ms, removendo o efeito visual
    }, 300);
  }
}

// Função que toca uma sequência de notas (composição) a partir do array de entradas
function playComposer(arrayInputComposer) {
  let wait = 0; // Define um tempo inicial de espera entre as notas

  // Para cada nota da composição, define um tempo de espera e chama a função playMusic
  for (let keyValueInputComposer of arrayInputComposer) {
    setTimeout(() => {
      playMusic(`key${keyValueInputComposer.toLowerCase()}`); // Toca a nota correspondente à tecla
    }, wait); // Aumenta o tempo de espera antes de tocar a próxima nota
    wait += 250; // Adiciona 250ms de intervalo entre cada nota
  }
}
