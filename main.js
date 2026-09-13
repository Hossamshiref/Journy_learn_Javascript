/*
  If Condition Challenge
*/

let a = 10;

console.log(
  `${a < 10 ? 10 : a >= 10 && a <= 40 ? "10 To 40" : a > 40 ? "> 40" : "Unknown"}`,
);
// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }

// Write Previous Condition With Ternary If Syntax

let st = "Elzero web School";

if ((st.length * 2).toString() === "34") {
  console.log("Good");
}

// W Position May Change
if (st.slice(st.indexOf("w")).charAt(0) === "w") {
  console.log("Good");
}

if (parseInt(st) !== "string") {
  console.log("Good");
}
if (typeof st.length === "number") {
  console.log("Good");
}

if (st.trim().slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
