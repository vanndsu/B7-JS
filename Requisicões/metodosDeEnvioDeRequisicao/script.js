fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    // Este primeiro .then() é chamado quando a requisição fetch é concluída com sucesso.
    // 'response' é o objeto de resposta HTTP retornado pela requisição.

    console.log("Código da operação: " + response.status);
    // Exibe o código de status da resposta no console.

    return response.json();
    // Retorna uma nova Promise que é resolvida quando o corpo da resposta HTTP é convertido em JSON.
  })
  .then((dados) => {
    // Este segundo .then() é chamado quando a Promise retornada por response.json() é resolvida.
    // 'dados' é o objeto JavaScript resultante da conversão do JSON.

    alert("ID da requisição: " + dados[1].id);
    // Exibe um alerta com o ID do segundo elemento na lista de 'dados'.

    // Não há retorno explícito aqui, então a Promise resultante deste .then() será resolvida com 'undefined'.
  })
  .catch((error) => {
    // O .catch() captura qualquer erro ocorrido durante a execução das Promises anteriores.
    alert("Erro ao executar a requisição");
    console.log(error);
    // Exibe um alerta indicando o erro e loga o erro no console.
  })
  .finally(() => {
    // O .finally() é chamado após a execução de todas as Promises, independentemente de sucesso ou falha.
    alert("Executado de intrometido");
    // Exibe um alerta indicando que o bloco .finally() foi executado.
  });
