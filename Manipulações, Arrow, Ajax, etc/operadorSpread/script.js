// Copiando e estendendo arrays
let array = [1, 2, 3, 4, 5]; // Definindo um array original
let newArray = [...array, 6, 7, 8, 9, 10]; // Usando o operador spread para copiar o array original e adicionar novos elementos
console.log(newArray); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Copiando e estendendo objetos
let info = {
  nome: "Vandim",
  idade: 10,
  nacionalidade: "Brasileiro",
}; // Definindo um objeto original

let newInfo = {
  ...info, // Usando o operador spread para copiar todas as propriedades do objeto original
  filhos: 0, // Adicionando uma nova propriedade ao novo objeto
};
console.log(newInfo); // Saída: { nome: "Vandim", idade: 10, nacionalidade: "Brasileiro", filhos: 0 }

// Função que copia e estende um objeto passado como argumento
function pegaInfo(inf) {
  let newInf = {
    ...inf, // Usando o operador spread para copiar todas as propriedades do objeto passado como argumento
    id: 0, // Adicionando novas propriedades ao novo objeto
    peso: 84,
  };

  return newInf; // Retornando o novo objeto
}

console.log(pegaInfo({ nome: "Glau", idade: 20, nacionalidade: "Brasileiro" })); // Saída: { nome: "Glau", idade: 20, nacionalidade: "Brasileiro", id: 0, peso: 84 }
