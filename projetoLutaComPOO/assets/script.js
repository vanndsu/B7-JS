
//importando classes no modelo ES6.
//import {Knight} from './classes';
//import {Sorcerer} from "./classes";

//importando usando o node.js
const {Monster,Knight,Sorcerer,LittleMonster} = require('./classes');


let char1 = new Knight('Capote')
let char2 = new Monster();

console.log(char2.attack,char1.name,char2.name)

