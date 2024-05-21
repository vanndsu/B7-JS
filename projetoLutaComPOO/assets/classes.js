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
/*export*/ class Knight extends Character {
  constructor(name) {
    super(name);
    this._life = 100;
    this.attack = 10;
    this.defense = 8;
    this.maxLife = this._life;
  }
}
/*export*/ class Sorcerer extends Character {
  constructor(name) {
    super(name);
    this._life = 80;
    this.attack = 15;
    this.defense = 5;
    this.maxLife = this._life;
  }
}
/*export*/ class Monster extends Character {
  constructor() {
    super('Monster');
    this._life = 120;
    this.attack = 10;
    this.defense = 10;
    this.maxLife = this._life;
  }
}
/*export*/ class LittleMonster extends Character {
  constructor() {
    super('Little Monster');
    this._life = 40;
    this.attack = 5;
    this.defense = 5;
    this.maxLife = this._life;
  }
}

//exportando as classes no modelo node.js para que possa ser importada em outro arquivo
module.exports = {Knight, Sorcerer, Monster, LittleMonster};
