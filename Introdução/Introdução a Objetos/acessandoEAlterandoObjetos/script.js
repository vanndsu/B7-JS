let personagem = {
  nome: "Vanderson",
  idade: 18,
  altura: 1.89,
  olhos: ["preto", "azul"],
  caracteristicas: {
    forca: 560,
    defesa: 450,
    estamina: 390,
  },
};

//alterando uma informação dentro do objeto.
personagem.olhos[0] = "azul";
personagem.olhos.push("verde");
personagem.caracteristicas.forca = 1000;

console.log(personagem.olhos);
console.log(personagem.caracteristicas.forca);

//objetos dentro de array
let carros = [
  { modelo: "Hatch", ano: 1999, cor: "azul" },
  { modelo: "Sedan", ano: 1999, cor: "Preto" },
];

console.log(
  "Acessando o ano e o modelo:\n" +
    "Modelo do carro:" +
    carros[0].modelo +
    ", Ano: " +
    carros[0].ano
);
