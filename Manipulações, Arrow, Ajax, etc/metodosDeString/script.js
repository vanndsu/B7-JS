let nome = "   Francisco Vanderson Ribeiro Silva";

// Extrai uma parte da string 'nome' do índice 0 ao índice 4 (não inclusivo)
let resultado = nome.slice(0, 4);

// Extrai a parte da string 'nome' a partir do índice 0 até o final da string
let resultado2 = nome.slice(0);

// Extrai os últimos 3 caracteres da string 'nome'
let resultado3 = nome.slice(-3);

// Extrai a parte da string 'nome' a partir do índice 0 até o final da string (não suporta índices negativos)
let resultado4 = nome.substring(0);

// Extrai 2 caracteres da string 'nome' a partir do índice 0
let resultado5 = nome.substr(0, 2);

// Extrai 2 caracteres da string 'nome' a partir do terceiro último índice (-2)
let resultado6 = nome.substr(-2, 2);

// Substitui a primeira ocorrência de 'Silva' por 'Pinheiro'
let resultado7 = nome.replace("Silva", "Pinheiro");

// Converte a string 'nome' para maiúsculas e depois para minúsculas
let resultado8 = nome.toUpperCase() + " " + nome.toLowerCase();

// Concatena a string 'nome' com a string 'Silva'
let resultado9 = nome.concat(" Silva");

// Remove os espaços em branco das extremidades da string 'nome'
let resultado10 = nome.trim();

// Retorna o caractere na posição 4 da string 'nome'
let resultado11 = nome.charAt(4);

// Retorna o caractere na posição 2 da string 'nome' usando a notação de colchetes
let resultado12 = nome[2];

// Divide a string 'nome' em um array de substrings usando o espaço como delimitador
let resultado13 = nome.split(" ");

console.log(resultado2); // '   Francisco Vanderson Ribeiro Silva'
console.log(resultado3); // 'lva'
console.log(resultado4); // '   Francisco Vanderson Ribeiro Silva'
console.log(resultado5); // '  '
console.log(resultado6); // 'va'
console.log(resultado7); // '   Francisco Vanderson Ribeiro Pinheiro'
console.log(resultado8); // '   FRANCISCO VANDERSON RIBEIRO SILVA    francisco vanderson ribeiro silva'
console.log(resultado9); // '   Francisco Vanderson Ribeiro Silva Silva'
console.log(resultado10); // 'Francisco Vanderson Ribeiro Silva'
console.log(resultado11); // 'F'
console.log(resultado12); // ' '
console.log(resultado13); // ['','', '', 'Francisco', 'Vanderson', 'Ribeiro', 'Silva']
