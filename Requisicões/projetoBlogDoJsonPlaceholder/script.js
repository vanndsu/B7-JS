// URL da API usada para obter e adicionar posts
// https://jsonplaceholder.typicode.com/posts

// Função assíncrona para ler posts da API
async function readPosts() {
  let postArea = document.querySelector(".posts");
  // Seleciona o elemento onde os posts serão exibidos
  postArea.innerHTML = "Carregando...";
  // Exibe uma mensagem de carregamento enquanto os dados são buscados

  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // Faz uma requisição GET para obter a lista de posts
  let json = await response.json();
  // Converte a resposta JSON em um objeto JavaScript

  if (json.length > 0) {
    // Verifica se há posts disponíveis
    postArea.innerHTML = "";
    // Limpa a mensagem de carregamento

    for (let i in json) {
      // Itera sobre cada post no objeto JSON
      let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}</div>`;
      // Cria o HTML para cada post usando template strings
      postArea.innerHTML += postHtml;
      // Adiciona o HTML do post na área de posts
    }
  } else {
    postArea.innerHTML = "Nenhum post para exibir";
    // Exibe uma mensagem caso não haja posts disponíveis
  }
}

// Função assíncrona para adicionar um novo post
async function addNewPost(title, body) {
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", // Define o método HTTP como POST
    headers: {
      "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
    },
    body: JSON.stringify({
      title: title, // Título do novo post
      body: body, // Corpo do novo post
      userId: 2, // ID do usuário que está adicionando o post
    }),
    // Converte um objeto JavaScript em uma string JSON para enviar como corpo da requisição
  });

  document.querySelector("#title-field").value = "";
  // Limpa o campo do título após adicionar o post
  document.querySelector("#body-field").value = "";
  // Limpa o campo do corpo após adicionar o post
}

// Adiciona um ouvinte de evento de clique ao botão
botao = document.querySelector("button").addEventListener("click", () => {
  let title = document.querySelector("#title-field").value;
  // Obtém o valor do campo de título
  let body = document.querySelector("#body-field").value;
  // Obtém o valor do campo de corpo

  if (title && body) {
    // Verifica se ambos os campos estão preenchidos
    addNewPost(title, body);
    // Chama a função para adicionar um novo post
  } else {
    alert("Preencha todos os campos");
    // Exibe um alerta se algum campo estiver vazio
  }
});

// Chama a função para ler os posts quando a página é carregada
readPosts();
