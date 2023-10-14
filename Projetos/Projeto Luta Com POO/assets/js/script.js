///const { Knight, Sorcerer } = require("./classes.js"); //usado para  importar usando o CommomJS(Ambiente Node)

import { Knight, Sorcerer } from "./classes.js";

let k1 = new Knight("Guerreiro");
let s1 = new Sorcerer("Mago");

console.log(
  `O ${k1.name} Tem uma vida máxima de ${k1.maxLife} e ${k1.defense} de defesa`
);
console.log(
  `O ${s1.name} Tem uma vida máxima de ${s1.maxLife} e ${s1.defense} de defesa`
);
