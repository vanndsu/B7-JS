let x = 4;
let z = 2;
let v = 1;

x = x + 3;

console.log('Result¹:', x);
console.log('Result²:', x + z);
console.log('Result³:', (x + z)-v);


//string
let y = '0';

y = y + x;

console.log('Result:', y); //No caso da string, irá concatenar

let nome = 'Vann';
let sobre = 'Ribeiro';
const nomeCompleto = nome + ' ' + sobre;
console.log('Nome completo:', nomeCompleto);