function sayHello(userName = "UnKnown", age = "Unknown") {
  // if (age === undefined) { old mothod with condition
  //   age = "UnKnown";
  // }
  // age = age || "UnKnown"; old method with logic
  return `Hi ${userName} your age ${age}`;
}

console.log(sayHello("Shiref"));
