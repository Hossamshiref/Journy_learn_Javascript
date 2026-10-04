function sayHello(userName, age) {
  if (age < 20) {
    console.log("you are unsutable to access");
  } else {
    console.log(`Hi ${userName} your age ${age}`);
  }
}

sayHello("Shiref", 51);
sayHello(`Hossam`, 14);
sayHello("Ahmed", 24);

function generativeYears(start, end, exclude) {
  let yourAge = 0;
  for (let i = start; i <= end; i++) {
    if (i === exclude) continue;
    yourAge++;
    console.log(i);
  }
  console.log(`Your Age Is ${yourAge}`);
}

generativeYears(2011, 2026, 2020);
