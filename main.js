/*
  Loop
  - Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(12));
  console.log(`## ${products[i]}`);
  console.log("Colors:");
  for (let j = 0; j < colors.length; j++) {
    console.log(`-${colors[j]}`);
  }
  console.log("Models:");
  for (let x = 0; x < models.length; x++) {
    console.log(`*${models[x]}`);
  }
}
