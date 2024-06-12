const clicou = () => {
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
document.querySelector("button").addEventListener("click", clicou);
