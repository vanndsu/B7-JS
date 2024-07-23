// Função que usa o operador rest para agrupar todos os argumentos em um array
function adicionar(...numeros) {
    return numeros; // Retorna o array de números
  }
  
  console.log(adicionar(1, 4, 5, 6, 7, 7, 8)); // Saída: [1, 4, 5, 6, 7, 7, 8]
  
  // Função que usa o operador rest para agrupar todos os argumentos em um array
  function adicionarNomes(...nomes) {
    return nomes; // Retorna o array de nomes
  }
  
  console.log(adicionarNomes("Vandim", "Paulo")); // Saída: ["Vandim", "Paulo"]
  
  // Função que combina o uso dos operadores spread e rest
  function spreadAndRest(nomes, ...nomes2) {
    // Cria um novo array combinando o array 'nomes' com os elementos adicionais 'nomes2'
    let novoConjunto = [...nomes, ...nomes2];
    return novoConjunto; // Retorna o novo array combinado
  }
  
  let nomes = ["Vini", "Vando"]; // Array inicial de nomes
  
  console.log(spreadAndRest(nomes, "Edi", "Vania")); // Saída: ["Vini", "Vando", "Edi", "Vania"]
  