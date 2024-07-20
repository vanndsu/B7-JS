// Desconstruindo arrays

// Define um array com quatro elementos
let array = ["Vandim Ribeiro", "Capote", "Walli", 10];

// Desestrutura o array em variáveis individuais
let [nomeCompleto, nomeCapote, nomeDjanho, number] = array;

// Define um array com três elementos e desestrutura diretamente
let [suporte, atendimento, vlans] = ["Vandim", "Walli", 302];

// Exibe os valores de 'nomeCompleto' e 'atendimento'
console.log(nomeCompleto, atendimento); // Saída: 'Vandim Ribeiro Walli'

// Função que retorna um array
function criaArray() {
  return [1, 2, 4];
}

// Desestrutura o array retornado pela função em variáveis individuais
let [a, b, c] = criaArray();

// Exibe o valor da variável 'a'
console.log(a); // Saída: 1
