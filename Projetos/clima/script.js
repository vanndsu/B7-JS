//minutagem faltante: 24:10

document.querySelector(".busca").addEventListener("submit", async (event) => {
  event.preventDefault();

  let input = document.querySelector("#searchInput").value;

  if (input !== "") {
    showWarning("Carregando...");
    let urlCoord = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURI(
      input
    )},BR&limit=1&appid=ceaec230071d85ac58ab752ddd07c9d8&units=metric&lang=pt_br`;

    let results = await fetch(urlCoord);

    let json = await results.json();

    if (json) {
      console.log(json[0].lon)
    } else {
      showWarning("Não encontramos esta localização");
    }
  }
});

function showInfo() {
  document.querySelector(".resultado").style.display = "block";
}

function showWarning(msg) {
  document.querySelector(".aviso").innerHTML = msg;
}
