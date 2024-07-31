// Função assíncrona para inserir um novo post
async function inserirPost() {
    // Define o texto "Carregando..." no elemento com a classe "posts"
    document.querySelector(".posts").innerHTML = "Carregando...";

    // Realiza uma requisição fetch para a URL especificada com o método POST
    let req = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", // Método HTTP utilizado

        // Corpo da requisição, contendo os dados do novo post
        body: JSON.stringify({
            title: "Titula de teste", // Título do post
            body: "Corpo teste", // Corpo do post
            userId: 45, // ID do usuário associado ao post
        }),
        headers: {
            "Content-Type": "application/json", // Cabeçalho indicando que o corpo da requisição é JSON
        },
    });

    // Converte a resposta da requisição para JSON
    let json = await req.json();

    // Loga o JSON retornado no console
    console.log(json);
}
