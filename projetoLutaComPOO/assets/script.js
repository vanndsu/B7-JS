//importando classes no modelo ES6.
import { Sorcerer, Knight, Stage, Monster, Log } from "./classes.js";

//importando usando o node.js
//const {Monster,Knight,Sorcerer,LittleMonster, Stage} = require('./classes');

let char1 = new Knight("Capote");
let char2 = new Monster("Bubu");
let log = new Log(document.querySelector(".log"));

const stage = new Stage(
  char1,
  char2,
  document.querySelector("#char"),
  document.querySelector("#monster"),
  log
);

stage.start();
