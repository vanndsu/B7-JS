let persongem = {
    nome: 'Vanndim',
    idade:23,
    pais: 'Brasil',
    olhos: ['azul','marrom'],
    caracteristicas: {
        forca: 20,
        magia: 7,
        stamina: 32
    }
}

console.log(persongem.olhos[1])
console.log(persongem.caracteristicas.forca);

//persongem.olhos[2] = 'preto'
persongem.olhos.push('amarelo')
console.log(persongem.olhos);

persongem.caracteristicas.forca += 43;
console.log(persongem.caracteristicas);


//

let persongem2 = {
  nome: "Glaubinha",
  idade: 19,
  carros: [
    { marca: "Fiat", cor: "preto", ano: 2005 },
    { marca: "Chevrolet", cor: "preto", ano: 2005 },
    { marca: "Ferrari", cor: "preto", ano: 2005 },
  ]
};console.log(persongem2.carros[2].marca)//acessando o terceiro objeto dentro do array carros

