let ingredientes = ["ovo", "farinha", "oleo", "agua"];

let numbers = [1, 4, 5, 7, 8];

let lista = [
  { name: { first: "Vann", last: "Ribeiro" }, age: 22 },
  { name: { first: "Kayron", last: "Guedes" }, age: 23 },
  { name: { first: "Mateus", last: "Capote" }, age: 26 },
  { name: { first: "Bruno", last: "Quebradeira" }, age: 27 },
];

console.log(`Total de ingredientes: ${ingredientes.length}`);
//ingredientes[5] = 'açucar'; modo de não se fazer.
ingredientes.push("depois do último"); //adiciona e cria um ítem no índice subsequente.
console.log(ingredientes);

ingredientes.unshift("antes do primeiro"); //adiciona e cria um ítem antes do primeiro índice
console.log(ingredientes);

ingredientes.pop(); //remove o último ítem da lista.
console.log(ingredientes);

ingredientes.shift(); //remove o primeiro ítem da lista.
console.log(ingredientes);

//substitui os itens pelo retorno
let numeroDobro = numbers.map(function (num) {
  return num * 2;
});
console.log(numeroDobro);

//substitui os itens pelo retorno
let olheo = ingredientes.map(function (elem) {
  return (elem = "kkk");
});
console.log(olheo);

//filtra um objeto por um item
let filtra = lista.filter(function (user) {
  return user.age > 23;
});
console.log(filtra);

//imprime o array de trás para frente
console.log(numbers.reverse());

//imprime o item que está no indice indicado
console.log(numbers.at(2));

//imprime o item e os itens que estão indices subsequentes
console.log(numbers.slice(2));
