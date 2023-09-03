// Objects

const pikachu = { name: "Pikachu 🐹" };
const stats = { hp: 40, attack: 60, defence: 45 };

pikachu["hp"] = stats.hp;
pikachu["attack"] = stats.attack;
pikachu["defence"] = stats.defence;

// OR

// const lvl0 = Object.assign(pikachu, stats);
// const lvl1 = Object.assign(pikachu, { hp: 45 });

const lvl0 = { ...pikachu, ...stats };
const lvl1 = { ...pikachu, hp: 45 };

console.log(lvl1);

// Arrays

let pokemon = ["Arbok", "Raichu", "Sandshrew"];

// pokemon.push("Bulbasor");
// pokemon.push("Metapod");
// pokemon.push("Weedle");

// Push
// pokemon = [...pokemon, "Bulbasor", "Metapod", "Weedle"];

// Unshift

pokemon = ["Bulbasor", ...pokemon, "Metapod", "Weedle"];

console.log(pokemon);
