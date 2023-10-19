///const { Knight, Sorcerer } = require("./classes.js"); //usado para  importar usando o CommomJS(Ambiente Node)

import {
  Knight,
  Sorcerer,
  LittleMonster,
  BigMonster,
  Stage,
  Log,
} from "./classes.js";

let log = new Log(document.querySelector(".log"));

let knight = new Knight("Gladiador");
let sorcerer = new Sorcerer("Mago");
let littleMonster = new LittleMonster();
let bigMonster = new BigMonster();

const stage = new Stage(
  knight,
  bigMonster,
  document.querySelector("#char"),
  document.querySelector("#monster"),
  log
);

stage.start();
