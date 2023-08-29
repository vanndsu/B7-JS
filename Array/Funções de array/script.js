let fruits = ['Banana','Maçã','Uva','Melancia']

console.log(fruits.join(' -> '));//Pega o intervalo do array e substitui pela string indicada
console.log(fruits.length);

fruits[0] = 'Jambo';
fruits[fruits.length - 1] = 'Add';

let i = 0;
while(i < fruits.length){
    console.log(fruits[i])
    i++;
}

console.log('------------------')

//consome mais processamento
fruits.pop()//remove o último item do array
fruits.push('Nuevo')//adiciona um novo 'indice' ao array 
fruits.push('Novo')

for(i of fruits){
    console.log(i)
}