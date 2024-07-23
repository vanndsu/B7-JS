let array = ["fei", "jão"];

// Obtém as chaves do array (índices) e as imprime
console.log(Object.keys(array)); // Saída: ['0', '1']

// Obtém os valores do array e os imprime
console.log(Object.values(array)); // Saída: ['fei', 'jão']

// Obtém as entradas do array (pares chave-valor) e as imprime
console.log(Object.entries(array)); // Saída: [['0', 'fei'], ['1', 'jão']]

let pessoa = {
  nome: "Carlos",
  idade: 10,
  olhos: {
    esquerdo: "Azul",
    direito: "Verde",
  },
};

// Obtém as chaves do objeto pessoa e as imprime
console.log(Object.keys(pessoa)); // Saída: ['nome', 'idade', 'olhos']

// Obtém os valores do objeto pessoa e os imprime
console.log(Object.values(pessoa)); // Saída: ['Carlos', 10, { esquerdo: 'Azul', direito: 'Verde' }]

// Obtém as entradas do objeto pessoa (pares chave-valor) e as imprime
console.log(Object.entries(pessoa)); // Saída: [['nome', 'Carlos'], ['idade', 10], ['olhos', { esquerdo: 'Azul', direito: 'Verde' }]]

// Obtém as chaves do objeto "olhos" dentro de "pessoa" e as imprime
console.log(Object.keys(pessoa.olhos)); // Saída: ['esquerdo', 'direito']
