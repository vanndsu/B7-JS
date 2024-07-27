function loadPosts() {
  document.getElementById("posts").innerHTML = "Carregando...";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (resultado) {
      return resultado.json();
    })
    .then(function (json) {
      montarBlog(json);
      alert('Aperte em "ok" para carregar os posts');
    })
    .catch(function (error) {
      console.log("Deu problema!");
    });
}

function montarBlog(lista) {
  let html = "";

  for (let i = 0; i < lista.length; i++) {
    html += "<h3>" + lista[i].title + "</h3>";
    html += lista[i].body + "</br>";
    html += "<hr>";
  }

  document.getElementById("posts").innerHTML = html;
}
