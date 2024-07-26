// Função que simula a obtenção de temperatura e retorna uma Promise
function pegarTemperatura() {
    return new Promise(function (resolve, reject) {
      // Exibe uma mensagem informando que a temperatura está sendo obtida
      console.log("pegando temperatura...");
  
      // Simula um atraso de 2 segundos antes de resolver a Promise
      setTimeout(function () {
        // Após 2 segundos, a Promise é resolvida com o valor "40º"
        resolve("40º");
      }, 2000);
    });
  }
  
  // Usando a Promise retornada pela função pegarTemperatura
  
  // Chama a função pegarTemperatura e armazena a Promise retornada na variável temp
  let temp = pegarTemperatura();
  
  // Define o que deve acontecer quando a Promise for resolvida
  temp.then(function (resultado) {
    // Exibe a temperatura obtida no console
    console.log("TEMPERATURA: " + resultado);
  });
  
  // Define o que deve acontecer se a Promise for rejeitada (não é utilizado aqui, mas é uma boa prática incluir)
  temp.catch(function (error) {
    // Exibe uma mensagem de erro no console
    console.log("Eita, deu erro!");
  });
  