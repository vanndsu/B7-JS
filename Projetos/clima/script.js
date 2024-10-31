//minutagem faltante: 24:10

document.querySelector(".busca").addEventListener("submit", async (event) => {
  event.preventDefault();

  let input = document.querySelector("#searchInput").value;
  let lon;
  let lat;

  if (input !== "") {
    let urlCoord = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURI(
      input
    )},BR&limit=1&appid=ceaec230071d85ac58ab752ddd07c9d8&units=metric&lang=pt_br`;

    let results = await fetch(urlCoord);

    let jsonLat = await results.json();

    if (jsonLat) {
      lon = jsonLat[0].lon;
      lat = jsonLat[0].lat;
      console.log(lon, lat);
    } else {
      showWarning("Não encontramos esta localização");
    }

    if (input !== "") {
      let urlCiy = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ceaec230071d85ac58ab752ddd07c9d8`;

      let resultsCity = await fetch(urlCiy);
      let jsonCity = await resultsCity.json();

      if (jsonCity) {
        console.log(jsonCity);
        showInfo({
          name: jsonCity.name,
          temp: jsonCity.main.temp,
          tempIcon: jsonCity.weather[0].icon,
          windSpeed: jsonCity.wind.speed,
          windAngle: jsonCity.wind.deg,
        });
      }
    } else {
      showWarning("Não encontramos esta localização");
    }
  }
});

function showInfo(json) {
  let tempC = json.temp - 273.15;
  document.querySelector(".resultado").style.display = "block";
  document.querySelector(".titulo").innerHTML = json.name;
  document.querySelector(".tempInfo").innerHTML = tempC.toFixed(2);
  document.querySelector(".ventoInfo").innerHTML = json.windSpeed;
  document.querySelector(".ventoPonto").style.transform = `rotate(${
    json.windAngle - 90
  }deg)`;
  document
    .querySelector(".temp img")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`
    );
}

function showWarning(msg) {
  document.querySelector(".aviso").innerHTML = msg;
}
