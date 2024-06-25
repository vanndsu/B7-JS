let lista = ["ovo", "farinha", "corante", "massa"]; // Declara uma lista de ingredientes
let listaDinamica = ["ovo", "farinha", "corante", "massa"]; // Declara uma outra lista de ingredientes para manipulação dinâmica

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
