// Função tradicional
function somar(x, y) {
    return x + y;
  }
  
  // Função anônima atribuída a uma variável
  let somar2 = function (x, y) {
    return x + y;
  };
  
  // Função de seta com bloco de código
  let somar3 = (x, y) => {
    return x + y;
  };
  
  // Função de seta com retorno implícito
  let somar4 = (x, y) => x + y;
  
  // Função de seta com um parâmetro e retorno implícito
  let letrasNoNome = (nome) => nome.length;
  
  // Chamadas de função e exibição dos resultados no console
  console.log(somar(9, 7)); // Saída: 16
  console.log(somar2(9, 7)); // Saída: 16
  console.log(somar3(9, 7)); // Saída: 16
  console.log(somar4(9, 7)); // Saída: 16
  console.log(letrasNoNome("Vandim")); // Saída: 6
  