// Função assíncrona que carrega posts da API e os exibe na página
async function loadPosts() {
    // Define o texto "Carregando..." no elemento com o id "posts"
    document.getElementById("posts").innerHTML = "Carregando...";
  
    // Faz uma requisição para a API usando fetch e aguarda a resposta
    let req = await fetch("https://jsonplaceholder.typicode.com/posts");
  
    // Converte a resposta em JSON e aguarda a conclusão
    let json = await req.json();
  
    // Chama a função montarBlog passando os dados JSON recebidos
    montarBlog(json);
  }
  
  // Função que monta o HTML para exibir os posts
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
  
    // Exibe um alerta informando ao usuário para clicar em "ok" para carregar os posts
    alert("clique em ok para carregar os posts");
  
    // Define o conteúdo do elemento com o id "posts" como o HTML gerado
    document.getElementById("posts").innerHTML = html;
  }
  