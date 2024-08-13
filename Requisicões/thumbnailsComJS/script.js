// Função para mostrar uma imagem selecionada pelo usuário
function mostrar() {
    // Obtém o arquivo de imagem selecionado pelo usuário no elemento com id "imagem"
    let imagem = document.getElementById("imagem").files[0];
  
    // Cria um novo elemento <img> para exibir a imagem
    let img = document.createElement("img");
    // Define o src da imagem como um URL de objeto criado a partir do arquivo selecionado
    img.src = URL.createObjectURL(imagem);
    // Define a largura da imagem
    img.width = 300;
    // Define a altura da imagem
    img.height = 200;
    // Adiciona o elemento <img> criado ao elemento com id "area"
    document.querySelector("#area").appendChild(img);
  }
  