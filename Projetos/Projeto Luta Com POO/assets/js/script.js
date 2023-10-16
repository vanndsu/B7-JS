///const { Knight, Sorcerer } = require("./classes.js"); //usado para  importar usando o CommomJS(Ambiente Node)

import {
  Knight,
  Sorcerer,
  LittleMonster,
  BigMonster,
  Stage,
} from "./classes.js";

let knight = new Knight("Guerreiro");
let sorcerer = new Sorcerer("Mago");
let littleMonster = new LittleMonster();
let bigMonster = new BigMonster();

const stage = new Stage(
  knight,
  littleMonster,
  document.querySelector("#char"),
  document.querySelector("#monster")
);

stage.start();
