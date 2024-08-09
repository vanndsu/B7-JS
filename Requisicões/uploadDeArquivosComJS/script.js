// Função assíncrona para enviar um arquivo via POST
async function enviar() {
    // Obtém o arquivo selecionado pelo usuário no elemento com id "arquivo"
    let arquivo = document.querySelector("#arquivo").files[0];
  
    // Cria um novo objeto FormData para enviar o arquivo e outros dados
    let body = new FormData();
    // Adiciona um campo "title" ao FormData com o valor "imagem de teste"
    body.append("title", "imagem de teste");
    // Adiciona o arquivo ao FormData
    body.append("arquivo", arquivo);
  
    // Envia uma requisição POST para a URL especificada com o FormData
    let req = await fetch("https://www.meusite.com.br/opload", {
      method: "POST",
      // Define o corpo da requisição como o objeto FormData
      body: body,
      // O "Content-Type" não deve ser definido explicitamente com FormData, pois é configurado automaticamente
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  