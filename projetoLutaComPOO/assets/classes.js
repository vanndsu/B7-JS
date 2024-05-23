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
  constructor(name) {
    super(name);
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
  constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
    this.log = logObject;
  }

  update() {
    //fighter 1
    this.fighter1El.querySelector(".name").innerHTML = `${
      this.fighter1.name
    } - ${this.fighter1.life.toFixed(2)} HP`;
    let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    this.fighter1El.querySelector(".bar").style.width = `${f1Pct}%`;

    //fighter 2
    this.fighter2El.querySelector(".name").innerHTML = `${
      this.fighter2.name
    } - ${this.fighter2.life.toFixed(2)} HP`;
    let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`;
  }
  doAtack(attacking, attacked) {
    if (attacked.life <= 0) {
      this.log.addMessage("Atacando cachorro morto");
      return;
    }
    let attackFactor = (Math.random() * 2).toFixed(2);
    let defenseFactor = (Math.random() * 2).toFixed(2);

    let actualDefense = attacked.defense * defenseFactor;
    let actualAttack = attacking.attack * attackFactor;

    if (actualAttack > actualDefense) {
      attacked.life = attacked.life - actualAttack;
      this.log.addMessage(
        `${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${
          attacked.name
        }`
      );
    } else {
      this.log.addMessage(`${attacked.name} conseguiu defender`);
    }
    this.update();
  }
  start() {
    this.update();

    this.fighter1El
      .querySelector(".atack-button")
      .addEventListener("click", () =>
        this.doAtack(this.fighter1, this.fighter2)
      );
    this.fighter2El
      .querySelector(".atack-button")
      .addEventListener("click", () =>
        this.doAtack(this.fighter2, this.fighter1)
      );
  }
}

export class Log {
  list = [];

  constructor(listEl) {
    this.listEl = listEl;
  }

  addMessage(msg) {
    this.list.push(msg);
    this.listEl.innerHTML = "";
    for (let i in this.list) {
      this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
    }
  }
}

//exportando as classes no modelo node.js para que possa ser importada em outro arquivo
//module.exports = { Knight, Sorcerer, Monster, LittleMonster, Stage };
