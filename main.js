function sayHello(userName, age) {
  if (age < 20) {
    return "you are unsutable to access";
  } else {
    return `Hi ${userName} your age ${age}`;
  }
}

console.log(sayHello("Shiref", 51));
console.log(sayHello(`Hossam`, 14));
console.log(sayHello("Ahmed", 24));

let yourAge = 0;
function generativeYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    yourAge++;
    if (i === exclude) return `interrepted`;
    console.log(i);
  }
}

console.log(generativeYears(2011, 2026, 2020));
console.log(`Your Age Is ${yourAge}`);
