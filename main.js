/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
  typeof a === "string"
    ? document.write(`Hello ${a}, `)
    : typeof b === "string"
      ? document.write(`Hello ${b}, `)
      : typeof c === "string"
        ? document.write(`Hello ${c}, `)
        : document.write(`Unlisted Input`);

  typeof a === "number"
    ? document.write(`Your Age Is ${a}, `)
    : typeof b === "number"
      ? document.write(`Your Age Is ${b}, `)
      : typeof c === "number"
        ? document.write(`Your Age Is ${c}, `)
        : document.write(`Unlisted Input`);

  typeof a === "boolean"
    ? a === true
      ? document.write(`You Are Available For Hire<br>`)
      : document.write(`You Are Not Available For Hire<br>`)
    : typeof b === "boolean"
      ? b === true
        ? document.write(`You Are Available For Hire<br>`)
        : document.write(`You Are Not Available For Hire<br>`)
      : typeof c === "boolean"
        ? c === true
          ? document.write(`You Are Available For Hire<br>`)
          : document.write(`You Are Not Available For Hire<br>`)
        : document.write(`Unlisted Input`);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
