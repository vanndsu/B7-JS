let ingredientes = [
    'Farinha',
    'Acucar',
    'Ovo',
    'Chocolate'
]

//tamanho do array
console.log(ingredientes.length)

//adicionando um novo elemento na próxima posição do array(é possível, porém não indicado)
ingredientes[4] = 'Cenoura'
console.log(ingredientes, ingredientes.length)

//forma correta de adicionar um elemento na próxima posição do array
ingredientes.push('Corante')
console.log(ingredientes, ingredientes.length)

//removendo o último item do array
ingredientes.pop()
console.log(ingredientes, ingredientes.length)

//removendo o primeiro item do array
ingredientes.shift()
console.log(ingredientes, ingredientes.length)
