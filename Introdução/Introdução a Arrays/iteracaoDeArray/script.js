let fruits = ["Banana", "Maçã", "Uva", "Laranja"];

//filter filtra por valor, index e o próprio array. No exemplo abaixo foi usado o valor.
let bigFruits = fruits.filter((item) => {
  return item.length > 4;

  //abaixo as instruções, a cima a forma reduzida que tem o mesmo resultado.

  /*
    if(item.length > 4){
        return true;
    }else 
        return false;*/
});
console.log(bigFruits);

//a função every verifica toda o array
// e só retornará true se TODOS os itens satisfizerem a condição.
let ok = fruits.every((value) => value.length > 3);

if (ok) {
  console.log("Todos os itens possuem valor maior que 3");
} else console.log("Nem todos os itens possuem valor maior que 3");

//a função every verifica toda o array
// e retornará true se algum dos itens satisfizerem a condição.
let ok2 = fruits.some((value) => value.length > 3);

if (ok2) {
  console.log("Algum dos itens possuem valor maior que 3");
} else console.log("Nenhum dos itens possuem valor maior que 3");

//a função includes verifica se no array possue a condição estabelecida.
if(fruits.includes('Uva')){
    console.log('Tem uva!')
}else
    console.log('Tem não viiunnn')