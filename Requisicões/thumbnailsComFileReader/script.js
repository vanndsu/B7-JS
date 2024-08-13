// Função para mostrar uma imagem selecionada pelo usuário
function mostrar() {
  // Cria um novo FileReader para ler o arquivo de imagem
  let reader = new FileReader();
  
  // Obtém o arquivo de imagem selecionado pelo usuário
  let imagem = document.getElementById("imagem").files[0];

  // Define o que fazer quando a leitura do arquivo terminar
  reader.onloadend = function () {
    // Cria um novo elemento de imagem
    let img = document.createElement("img");
    
    // Define a fonte da imagem como o resultado da leitura do arquivo
    img.src = reader.result;
    
    // Define a largura da imagem para 200 pixels
    img.width = 200;

    // Adiciona a imagem criada à div com o id "area"
    document.getElementById("area").appendChild(img);
  };

  // Inicia a leitura do arquivo como uma URL de dados
  reader.readAsDataURL(imagem);
}
