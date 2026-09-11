let name = "Hossam";
let gender = "Male";
let theAge = 15;

gender === "Male" ? console.log("Mr") : console.log("Mrs");

console.log("==============================");

let result = gender === "Male" ? "Mr" : "Mrs";

document.write(result);

// gender === "Male"
//   ? console.log(`Hello Mr ${name}
// your theAge is:${thetheAge}`)
//   : console.log(`Hello Mrs ${name}
// your theAge is:${thetheAge}`);

console.log(`Hello ${gender === "Male" ? "Mr" : "Mrs"} ${name}
your theAge is: ${theAge}`);

console.log(
  theAge > 20
    ? 20
    : theAge < 60 && theAge > 20
      ? "20 to 60"
      : theAge > 60
        ? "bigger 60"
        : "unknown",
);
