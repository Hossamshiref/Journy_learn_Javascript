let names = ["Hossam", "Shiref", "Ahmed", ["Mariam", "Ganna"]];

console.log(`Hello ${names[1]}`);
console.log(`Hello ${names[0]}`);
console.log(`Hello ${names[2]}`);
console.log(`Hello ${names[3]}`);
console.log(`Hello ${names[3][0]}`);
console.log(`${names[3][1][3]}`);
console.log(`${names[2][1]}`);

console.log(names);

names[1] = "Mohamed";
console.log(names);

names[3][1] = "Osama";
console.log(names);

names[3] = ["Ali", "Ibrahim"];
console.log(names);

console.log(Array.isArray(names));
