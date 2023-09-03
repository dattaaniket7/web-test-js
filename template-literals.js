const horse = {
  name: "Topher 🐴",
  size: "large",
  skills: ["jousting", "racing"],
  age: 7,
};

// let bio =
//   horse.name +
//   " is a " +
//   horse.size +
//   " horse skilled in " +
//   horse.skills.join(" & ");

const { name, size, skills } = horse;
bio = `${name} is a ${size} horse skilled in ${skills.join(" & ")}`;
console.log(bio);

// Advanced Tag

function horseAge(str, age) {
  const ageStr = age > 5 ? "old" : "young";
  return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`This horse is ${horse.age}`;
console.log(bio2);
