const clicou = () => {
  //fetch faz a requisição
  //then executa uma função especifica
  fetch("https://jsonplaceholder.typicode.com/posts")
    //pega a reposta pura e transfora em objeto
    .then((response) => {
      return response.json();
    })
    //imprime o objeto/array
    .then((json) => {
      //pega o primeiro item do array
      console.log(json[99].body);
      alert(`Titulo do primeiro Post: ${json[0].title}`);
    });
};

document.querySelector("button").addEventListener("click", clicou);
