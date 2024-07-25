// Função que será executada após 2 segundos
function rodar() {
    console.log("rodei");
  }
  
  // Função que será executada após 4 segundos
  function rodouDnv() {
    console.log(`rodei de novo`);
  }
  
  let nome = "Vandim"; // Declaração da variável nome
  
  // Agenda a execução da função rodar após 2 segundos (2000 milissegundos)
  setTimeout(rodar, 2000);
  
  let sobrenome = "Ribeiro"; // Declaração da variável sobrenome
  
  // Agenda a execução da função rodouDnv após 4 segundos (4000 milissegundos)
  setTimeout(rodouDnv, 4000);
  
  // Imprime o nome completo no console
  console.log(`Nome completo: ${nome} ${sobrenome}`);
  