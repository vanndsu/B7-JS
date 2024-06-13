const clicou = () => {
  //por padrão o método no fetch é GET, pegar uma informação.
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      //a função status retorna o código da operação.
      console.log("Código da operação: " + response.status);
      return response.json();
    })
    .then((dados) => {
      alert("ID da requisição: " + dados[1].id);
    })
    //pega o que deu errado na requisição
    .catch((error) => {
      alert("Erro ao executar a requisição");
      console.log(error);
    })
    //callback que será executado no final de tudo
    //função backup
    .finally(() => {
      alert("executado de intrometido");
    });
};

function inserir() {
  //colocando o método POST para inserir uma informação nova.
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      //no exemplo, a forma de como vai mandar o body na requisição é através de um json
      "Content-Type": "application/json",
    },
    //função que manda um objeto, e é traduzida em um json.
    body: JSON.stringify({
      userId: 3,
      title: "Titulo teste",
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
}
document.querySelector("button").addEventListener("click", clicou);
document.querySelector(".b2").addEventListener("click", inserir);
