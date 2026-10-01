/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

document.write(`<div>We Have ${myAdmins.indexOf("Stop")} Admins</div>`);
document.write(`<hr>`);

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  document.write(`<div>`);
  document.write(`<p>The Admin For Team ${i + 1} is ${myAdmins[i]}</p>`);
  document.write(`<h2>Team Members:</h2>`);
  for (let j = 0; j < myEmployees.length; j++)
    if (myAdmins[i].charAt(0) === myEmployees[j].charAt(0)) {
      document.write(`<p>-${i + 1} ${myEmployees[j]}</p>`);
    }
  if (i < myAdmins.indexOf("Stop") - 1) document.write(`<hr>`);
  document.write(`</div>`);
}
