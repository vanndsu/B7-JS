let fruits = ["Banana", "Maça", "Uva", "Morango"];

//fruits.filter(value,index,array) //parâmetros função filter

/*let bigFruits = fruits.filter((item) => {
  if (item.length > 4) {
    return item;
  } else return 0;
});*/

let bigFruits = fruits.filter((item) => {
  return item.length > 4;
}); //versão otimizada da função a cima.

fruits.push("Jabuticaba");
let nameFruit = "Jabuticaba";
let lowFruits = fruits.filter(function sla(item) {
  return item == nameFruit;
});

console.log(fruits);
console.log(lowFruits);
console.log(bigFruits);

//função every (retorna true quado todos itens do array satisfizerem)

let ok = fruits.every((value) => value.length > 3);

if (ok) {
  console.log("Todos os itens possuem mais que 3 caracteres");
} else console.log("Nem todos possuem mais que 3 caracteres");

//função some (retorna true se tivem algum item que satisfaz)

let algum = fruits.some((value) => value.length < 4);

if (algum) {
  console.log("Alguem satisfaz");
} else console.log("Ngm satisfaz");

//função includes (verifica se o item dito contém no array)
fruits.pop();
fruits.pop();
fruits.pop();
if (fruits.includes("Uva")) {
  console.log("Tem uva!!!");
} else console.log("Não tem uva.");
