function loadPosts() {
    // Define o texto "Carregando..." no elemento com o id "posts"
    document.getElementById("posts").innerHTML = "Carregando...";
  
    // Faz uma requisição HTTP para a URL fornecida usando a função fetch
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function (resultado) {
        // Converte o resultado da resposta HTTP em formato JSON
        return resultado.json();
      })
      .then(function (json) {
        // Chama a função montarBlog, passando os dados JSON como argumento
        montarBlog(json);
  
        // Exibe um alerta informando ao usuário para carregar os posts
        alert('Aperte em "ok" para carregar os posts');
      })
      .catch(function (error) {
        // Caso ocorra um erro durante a requisição, exibe uma mensagem no console
        console.log("Deu problema!");
      });
  }
  
  function montarBlog(lista) {
    // Inicializa uma variável para armazenar o HTML gerado
    let html = "";
  
    // Percorre a lista de posts recebidos
    for (let i = 0; i < lista.length; i++) {
      // Adiciona um título de post em um elemento <h3> e o corpo do post
      html += "<h3>" + lista[i].title + "</h3>";
      html += lista[i].body + "</br>";
      // Adiciona uma linha horizontal para separar os posts
      html += "<hr>";
    }
  
    // Define o conteúdo HTML gerado no elemento com o id "posts"
    document.getElementById("posts").innerHTML = html;
  }
  