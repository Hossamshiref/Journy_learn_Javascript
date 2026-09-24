let names = [1, 2, 3, "Hossam", "Shiref", "Ahmed", "Mohamed", "Osama"];
let only = [];
for (let i = 0; i < names.length; i++) {
  if (typeof names[i] === "string") {
    only.push(names.at(i));
  }
}
console.log(only);

console.log("=============================");

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
