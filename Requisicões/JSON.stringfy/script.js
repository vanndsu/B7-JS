// Declara um objeto JavaScript
let pessoa = {
  nome: "Vandim",
  idade: 14,
};

// Converte o objeto JavaScript em uma string JSON
let pessoaString = JSON.stringify(pessoa);

// Imprime a string JSON no console
console.log(pessoaString); // Saída: {"nome":"Vandim","idade":14}
