export const defaultCharacter = {
  name: "",
  life: 1,
  maxLife: 1,
  attack: 0,
  defense: 0,
};

export const createKnight = (name) => {
  return {
    ...defaultCharacter,
    name: name,
    life: 100,
    maxLife: 100,
    attack: 10,
    defense: 8,
  };
};
export const createSorcerer = (name) => {
  return {
    ...defaultCharacter,
    name: name,
    life: 50,
    maxLife: 50,
    attack: 15,
    defense: 5,
  };
};

export const Stage = {
  fighter1: null,
  fighter2: null,
  fighter1El: null,
  fighter2El: null,
  log: null,

  start(fighter1, fighter2, fighter1El, fighter2El, logEl) {
    (this.fighter1 = fighter1),
      (this.fighter2 = fighter2),
      (this.fighter1El = fighter1El),
      (this.fighter2El = fighter2El),
      (this.log = logEl);

    this.fighter1El.querySelector("button").addEventListener("click", () => {
      this.doAttack(fighter1, fighter2);
    });
    this.fighter2El.querySelector("button").addEventListener("click", () => {
      this.doAttack(fighter2, fighter1);
    });
    this.update(this.fighter1, this.fighter2, this.fighter1El, this.fighter2El);
  },

  doAttack(attacking, attacked) {
    let attackFactor = (Math.random() * 2).toFixed(2);
    let defenseFactor = (Math.random() * 2).toFixed(2);

    let actualAttack = attacking.attack * attackFactor;
    let actualDefense = attacked.defense * defenseFactor;

    if (actualAttack > actualDefense && attacked.life > 0) {
      attacked.life -= actualAttack;

      if (attacked.life < 0) {
        attacked.life = 0;
      }

      this.msg(
        `${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${
          attacked.name
        }`
      );
    } else if (attacked.life <= 0) {
      this.msg(`${attacked.name} está morto`);
    } else {
      this.msg(`${attacked.name} defendeu o ataque de ${attacking.name}`);
    }

    this.update(this.fighter1, this.fighter2, this.fighter1El, this.fighter2El);
  },
  update(fighter1, fighter2, fighter1El, fighter2El) {
    let pct1 = (fighter1.life / fighter1.maxLife) * 100;
    let pct2 = (fighter2.life / fighter2.maxLife) * 100;

    fighter1El.querySelector(".bar").style.width = `${pct1}%`;
    fighter2El.querySelector(".bar").style.width = `${pct2}%`;

    fighter1El.querySelector(".name").innerHTML = `${
      fighter1.name
    } - ${fighter1.life.toFixed(1)} HP`;

    fighter2El.querySelector(".name").innerHTML = `${
      fighter2.name
    } - ${fighter2.life.toFixed(1)} HP`;
  },
  msg(msg) {
    let list = [];

    list = msg;

    this.log.innerHTML += `<li>${list}</li>`;
  },
};

//module.exports = { createSorcerer, createKnight, defaultCharacter };
