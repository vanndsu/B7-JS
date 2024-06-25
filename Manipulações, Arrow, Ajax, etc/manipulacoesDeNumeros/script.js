let numero = 10.83839329; // Declara uma variável numérica
let numeroString = '43.98'; // Declara uma variável string representando um número

// Converte o número para uma string
let resultado = numero.toString();

// Formata o número para duas casas decimais
let resultado2 = numero.toFixed(2);

// Converte a string para um número inteiro e adiciona 50
let resultado3 = parseInt(numeroString) + 50;

// Converte a string para um número de ponto flutuante e adiciona 50.09
let resultado4 = parseFloat(numeroString) + 50.09;

console.log(resultado + typeof(resultado)); // '10.83839329string'
console.log(resultado2); // '10.84'
console.log(resultado3); // 93
console.log(resultado4); // 94.07
