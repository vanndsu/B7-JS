//criando um array simples
let colors = ['blue','green','red'];

//exibe apenas o primeiro valor
console.log(colors[0])

//exibe todo o array
console.log(colors)

//também é possível adicionar strings em um array de numbers
let numbers = [1,3,5,'hehe'];

console.log(numbers)

//criando um array dentro de outro array

let lista = [1,4,['xxx','yyy']]
let listas = [lista, 'teste']

console.log(lista)
console.log(listas)

//acessando um elemento de um array dentro de um array
//buscando o elemento 'xxx'
console.log(listas[0][2][0])

//buscando a string teste.
console.log(listas[1])

