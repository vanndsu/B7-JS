let carros = ['BMW', 'Ferrari', 'Mercedes']
let x = 1;

console.log(carros[x])

//trocando ferrari por audi

carros [1] = 'Audi'
console.log(carros[x])

//adicionando um volvo a lista
carros.push('Volvo')
console.log(carros)

//quantos itens tem no array
console.log(`Carros: ${carros}, \nQuantidade de carros: ${carros.length}`)