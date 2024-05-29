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

  start(fighter1, fighter2, fighter1El, fighter2El) {
    (this.fighter1 = fighter1),
      (this.fighter2 = fighter2),
      (this.fighter1El = fighter1El),
      (this.fighter2El = fighter2El);

    this.fighter1El.querySelector("button").addEventListener("click", () => {
      this.doAttack(fighter1, fighter2);
    });
    this.fighter2El.querySelector("button").addEventListener("click", () => {
      this.doAttack(fighter2, fighter1);
    });

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
  doAttack(attacking, attacked) {
    if (attacked.life <= 0) {
      console.log(`${attacked.name} está morto`);
    }

    let attackFactor = (Math.random() * 2).toFixed(2);
    let defenseFactor = (Math.random() * 2).toFixed(2);

    let actualAtack = attacking.attack * attackFactor;
    let actualDefense = attacked.defense * defenseFactor;

    attacking = actualAtack;
    attacked = actualDefense;

    if (actualAtack > actualDefense) {
      let damage = actualAtack;

      attacked.life = attacked.life - damage;

      console.log(
        `${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${
          attacked.name
        }`
      );
    }

    console.log(
      `${attacking.name} causou ${attacking.attack} de dano em ${attacked.name}`
    );
  },
};

//module.exports = { createSorcerer, createKnight, defaultCharacter };
