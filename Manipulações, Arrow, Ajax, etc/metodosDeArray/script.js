let lista = ["ovo", "farinha", "corante", "massa"]; // Declara uma lista de ingredientes
let listaDinamica = ["ovo", "farinha", "corante", "massa"]; // Declara outra lista de ingredientes para manipulação dinâmica
let listaNumerica = [45, 78, 90, 54]; // Declara uma lista de números
let listaNumerica2 = []; // Declara uma lista vazia para manipulação
let listaUsuarios = [
  { id: 1, nome: "Vanderson", sobrenome: "Ribeiro" },
  { id: 2, nome: "Glau", sobrenome: "Pinheiro" },
  { id: 3, nome: "Edvi", sobrenome: "Vania" },
]; // Declara uma lista de objetos representando usuários

let res = lista.toString(); // Converte a lista para uma string separada por vírgulas
let res2 = lista.join("-"); // Converte a lista para uma string, com itens separados por "-"
let res3 = lista.indexOf("corante"); // Encontra o índice do item "corante" na lista

console.log(res); // 'ovo,farinha,corante,massa'
console.log(res2); // 'ovo-farinha-corante-massa'
console.log(res3); // 2

// Remove o último item da lista
listaDinamica.pop();
console.log(listaDinamica); // ['ovo', 'farinha', 'corante']

// Remove o primeiro item da lista
listaDinamica.shift();
console.log(listaDinamica); // ['farinha', 'corante']

// Adiciona um item ao final da lista
listaDinamica.push("chocolate");
console.log(listaDinamica); // ['farinha', 'corante', 'chocolate']

// Substitui o primeiro item da lista
listaDinamica[0] = "item0";
console.log(listaDinamica); // ['item0', 'corante', 'chocolate']

// Adiciona um item na quarta posição (índice 3)
listaDinamica[3] = "item adicionado";
console.log(listaDinamica); // ['item0', 'corante', 'chocolate', 'item adicionado']

// Adiciona um item no final da lista usando o comprimento do array
listaDinamica[listaDinamica.length] = "item adicionado com o tamanho do array";
console.log(listaDinamica); // ['item0', 'corante', 'chocolate', 'item adicionado', 'item adicionado com o tamanho do array']

// Deleta o item na quarta posição (índice 4)
delete listaDinamica[4];
console.log(listaDinamica); // ['item0', 'corante', 'chocolate', 'item adicionado', undefined]

// Remove dois itens a partir da segunda posição (índice 1)
listaDinamica.splice(1, 2);
console.log(listaDinamica); // ['item0', 'item adicionado', undefined]

// Concatena a lista original com a lista dinâmica
let res4 = lista.concat(listaDinamica);
console.log(res4); // ['ovo', 'farinha', 'corante', 'massa', 'item0', 'item adicionado', undefined]

// Ordena a lista em ordem alfabética
lista.sort();
console.log(lista); // ['corante', 'farinha', 'massa', 'ovo']

// Inverte a ordem da lista
lista.reverse();
console.log(lista); // ['ovo', 'massa', 'farinha', 'corante']

// Multiplica cada item da listaNumerica por 2 e retorna uma nova lista
listaNumerica2 = listaNumerica.map(function (item) {
  return item * 2;
});

/* Forma alternativa para o método acima.
for(let i in listaNumerica){
    listaNumerica2.push(listaNumerica[i]*2)
}*/

console.log(listaNumerica2); // [90, 156, 180, 108]

// Filtra os itens da listaNumerica que são menores que 90
listaNumerica2 = listaNumerica.filter(function (item) {
  if (item < 90) {
    return true;
  } else {
    return false;
  }
});

console.log(listaNumerica2); // [45, 78, 54]

// Verifica se todos os itens da listaNumerica são maiores que 100
listaNumerica2 = listaNumerica.every((item) => {
  if (item > 100) {
    return true;
  } else {
    return false;
  }
});

console.log(listaNumerica2); // false

// Verifica se pelo menos um item da listaNumerica é maior que 40
listaNumerica2 = listaNumerica.some((item) => {
  // Operador ternário: se o item for maior que 40, retorna true; caso contrário, retorna false
  return (item > 40) ? true : false;
});

console.log(listaNumerica2); // true

// Encontra o primeiro item na listaNumerica que é igual a 90
listaNumerica2 = listaNumerica.find((item) => {
  return (item == 90) ? true : false;
});
console.log(listaNumerica2); // 90

// Encontra o índice do primeiro item na listaNumerica que é igual a 90
listaNumerica2 = listaNumerica.findIndex((item) => {
  return (item == 90) ? true : false;
});
console.log(listaNumerica2); // 2

// Encontra o primeiro usuário com sobrenome igual a "Vania"
let pessoa = listaUsuarios.find((item) => {
  return (item.sobrenome == "Vania") ? true : false;
});
console.log(pessoa); // { id: 3, nome: 'Edvi', sobrenome: 'Vania' }

// Encontra o índice do primeiro usuário com sobrenome igual a "Vania"
let pessoa2 = listaUsuarios.findIndex((item) =>
  item.sobrenome == "Vania" ? true : false
);
console.log(pessoa2); // 2
