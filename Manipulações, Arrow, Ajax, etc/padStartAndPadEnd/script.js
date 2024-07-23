let numeroTel = "9";

// Preenche o número de telefone com '*' à esquerda até que tenha 9 caracteres de comprimento
console.log(numeroTel.padStart(9, "*")); // Saída: '********9'

// Preenche o número de telefone com '*' à direita até que tenha 9 caracteres de comprimento
console.log(numeroTel.padEnd(9, "*")); // Saída: '9********'

let cartaoDeCredito = "1234123412341234";

// Obtém os últimos 4 dígitos do cartão de crédito
let lastDigits = cartaoDeCredito.slice(-4);

// Preenche os dígitos restantes à esquerda com '*' até que tenha o mesmo comprimento do cartão de crédito original
let cartaoEncriptado = lastDigits.padStart(cartaoDeCredito.length, "*");
console.log(cartaoEncriptado); // Saída: '************1234'
