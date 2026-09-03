let numberOne = 10;
let numberTwo = 20;
let stringOne = "10";
let stringTwo = "20";

// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(stringOne + stringTwo); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(`${stringOne}${stringTwo}`); // Template Literals Way => String

console.log(numberOne + "\n" + numberTwo);

console.log(`${numberOne}
${numberTwo}`);
