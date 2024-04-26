let fruits = ['Banana','Maçã','Uva','Laranja'];

//a função join, colocará nos espaços de um item do array o que foi atribuido na função.
console.log(fruits.join(', '))
console.log(fruits)


fruits[fruits.length-1] = 'Coco'
console.log(fruits)

//ordena o array em ordem alfabética
fruits.sort();
console.log(fruits)

//inverte o array do último item ao primeiro
fruits.reverse()
console.log(fruits)