let timer; // Variável para armazenar o setInterval
let timer2S; // Variável para armazenar o setTimeout

// Função para iniciar a atualização do tempo
function comeca() {
  timer = setInterval(showTime, 1); // Atualiza a hora a cada milissegundo
}

// Função para parar a atualização do tempo
function para() {
  clearInterval(timer); // Para o intervalo de tempo
}

// Função para exibir um alerta após 2 segundos
function rodar() {
  timer2S = setTimeout(function () {
    alert("Rodou!"); // Exibe o alerta após 2 segundos
  }, 2000);
}

// Função para cancelar o alerta agendado
function pararRodar() {
  clearTimeout(timer2S); // Cancela o setTimeout
}

// Função para exibir a hora atual
function showTime() {
  let d = new Date();
  let hora = d.getHours();
  let minutos = d.getMinutes();
  let segundos = d.getSeconds();
  let mSegundos = d.getMilliseconds();
  let horaCompleta = `${hora}:${minutos}:${segundos}:${mSegundos}`;

  document.querySelector(".hora").innerHTML = horaCompleta; // Atualiza o elemento h1 com a hora completa
}

// Adiciona os ouvintes de evento (event listeners) aos botões
document.querySelector(".comeca").addEventListener("click", comeca);
document.querySelector(".para").addEventListener("click", para);
document.querySelector(".rodar").addEventListener("click", rodar);
document.querySelector(".pararRodar").addEventListener("click", pararRodar);
