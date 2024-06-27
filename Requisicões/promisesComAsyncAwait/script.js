/* Forma de chamar a função async em uma função comum:
   async function clicou(){}
*/

// Forma de chamar a função async numa arrow function:
const clicou = async () => {
    // Realiza uma requisição GET para obter a lista de posts
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("Código da operação: " + response.status);
    // Exibe o código de status da resposta no console
  
    let json = await response.json();
    // Converte o corpo da resposta JSON em um objeto JavaScript e aguarda a resolução da promessa
  
    alert("ID da requisição: " + json[1].id);
    // Exibe o ID do segundo post da lista em um alerta
  
    alert("tesiii"); // Exibe um alerta com a mensagem "tesiii"
  };
  
  // Declara uma função assíncrona chamada 'inserir'
  async function inserir() {
    // Faz uma requisição POST para adicionar um novo post
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // Define o método HTTP como POST para enviar dados ao servidor
      headers: {
        "Content-Type": "application/json", // Define o tipo de conteúdo do corpo da requisição como JSON
      },
      body: JSON.stringify({
        userId: 3, // Define o ID do usuário para o novo post
        title: "Titulo teste", // Define o título do novo post
      }),
      // Converte um objeto JavaScript em uma string JSON para enviar como corpo da requisição
    });
  
    let json = await response.json();
    // Converte o corpo da resposta JSON em um objeto JavaScript e aguarda a resolução da promessa
  
    console.log(json);
    // Exibe o objeto JSON da resposta no console
  }
  
  // Adiciona um ouvinte de evento de clique ao elemento com classe '.b2' para chamar a função 'inserir'
  document.querySelector(".b2").addEventListener("click", inserir);
  
  // Adiciona um ouvinte de evento de clique ao primeiro botão encontrado na página para chamar a função 'clicou'
  document.querySelector("button").addEventListener("click", clicou);
  