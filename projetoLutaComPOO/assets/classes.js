class Character {
  _life = 1;
  maxLife = 1;
  attack = 0;
  defense = 0;

  constructor(name) {
    this.name = name;
  }

  get life() {
    return this._life;
  }
  set life(newLife) {
    this._life = newLife < 0 ? 0 : newLife;
  }
}

//export é usado para exportar a classe para ser usada em outro arquivo
export class Knight extends Character {
  constructor(name) {
    super(name);
    this._life = 100;
    this.attack = 10;
    this.defense = 8;
    this.maxLife = this._life;
  }
}
export class Sorcerer extends Character {
  constructor(name) {
    super(name);
    this._life = 80;
    this.attack = 15;
    this.defense = 5;
    this.maxLife = this._life;
  }
}
export class Monster extends Character {
  constructor() {
    super("Monster");
    this._life = 120;
    this.attack = 10;
    this.defense = 10;
    this.maxLife = this._life;
  }
}
export class LittleMonster extends Character {
  constructor() {
    super("Little Monster");
    this._life = 40;
    this.attack = 5;
    this.defense = 5;
    this.maxLife = this._life;
  }
}

export class Stage {
  constructor(fighter1, fighter2, fighter1El, fighter2El) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
  }

  update() {
    //fighter 1
    this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
    let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
    this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`

    //fighter 2
    this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
    let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`;
  }
  doAtack(attacking, attacked){
    console.log(`${attacking.name} atacou ${attacked.name}`);
  }
  start() {
    this.update();

    this.fighter1El.querySelector(".atack-button").addEventListener('click',() => this.doAtack(this.fighter1,this.fighter2))
    this.fighter2El.querySelector(".atack-button").addEventListener('click',() =>this.doAtack(this.fighter2,this.fighter1))
  }
}

//exportando as classes no modelo node.js para que possa ser importada em outro arquivo
//module.exports = { Knight, Sorcerer, Monster, LittleMonster, Stage };
