let array = ["Farofa", "Arroz"];

// Verifica se o array contém o elemento "arroz" (note a diferença na capitalização)
console.log(array.includes("arroz")); // Saída: false

// Verifica se o array contém o elemento "Arroz" (correspondência exata)
console.log(array.includes("Arroz")); // Saída: true

// Verifica se o array contém o elemento "Macarrão"
console.log(array.includes("Macarrão")); // Saída: false

let string = "Vandim";

// Verifica se a string contém o caractere "v" (minúsculo)
console.log(string.includes("v")); // Saída: false

// Verifica se a string contém o caractere "V" (maiúsculo)
console.log(string.includes("V")); // Saída: true

// Verifica se a string contém o caractere "a"
console.log(string.includes("a")); // Saída: true

// Repete a string "Vandim" 3 vezes
console.log(string.repeat(3)); // Saída: "VandimVandimVandim"
