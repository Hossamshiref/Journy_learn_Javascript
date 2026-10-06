function checkStatus(a, b, c) {
  // Your Code Here
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

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
