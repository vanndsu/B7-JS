// Adiciona um ouvinte de eventos para capturar quando uma tecla é solta no teclado
document.body.addEventListener("keyup", (event) => {
  console.log(event); // Exibe o objeto do evento no console
  console.log(event.key); // Exibe qual tecla foi pressionada
  console.log(event.code.toLowerCase()); // Exibe o código da tecla em letras minúsculas
  playSound(event.code.toLowerCase()); // Chama a função playSound() passando o código da tecla pressionada
});

// Adiciona um ouvinte de eventos ao botão "composer" para criar uma composição de sons
document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value; // Obtém o valor digitado no campo de entrada
  console.log(song); // Exibe a string da composição digitada
  if (song !== "") { // Verifica se a string não está vazia
    let songArray = song.split(""); // Converte a string em um array de caracteres
    console.log(songArray); // Exibe o array de caracteres da composição
    playComposition(songArray); // Chama a função playComposition() passando o array de sons
  }
});

// Função responsável por tocar um som baseado na tecla pressionada
function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`); // Seleciona o elemento de áudio correspondente ao som
  console.log(audioElement); // Exibe o elemento de áudio no console
  let keyElement = document.querySelector(`div[data-key="${sound}"]`); // Seleciona o elemento da tecla na interface visual

  if (audioElement) { // Verifica se o elemento de áudio existe
    audioElement.currentTime = 0; // Reseta o áudio para tocar do início
    audioElement.play(); // Toca o som
  }
  if (keyElement) { // Verifica se o elemento visual da tecla existe
    keyElement.classList.add("active"); // Adiciona a classe "active" para dar o efeito visual de tecla pressionada
    setTimeout(() => {
      keyElement.classList.remove("active"); // Remove a classe "active" após 300ms para reverter o efeito visual
    }, 300);
  }
}

// Função para tocar a sequência de sons da composição digitada pelo usuário
function playComposition(songArray) {
  let wait = 0; // Variável para controlar o tempo de espera entre os sons

  // Para cada item da composição, toca o som correspondente
  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`); // Chama a função playSound() para cada item com um delay
    }, wait); // Adiciona um tempo de espera para que os sons não toquem ao mesmo tempo
    wait += 250; // Incrementa o tempo de espera para o próximo som
  }
}
