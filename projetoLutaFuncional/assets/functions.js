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

//module.exports = { createSorcerer, createKnight, defaultCharacter };
