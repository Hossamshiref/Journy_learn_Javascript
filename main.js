function sayHello(theName, theGender) {
  // Your Code Here

  if (theGender === "Male" || theGender === "male") {
    document.write(`Hello Mr ${theName}<br>`);
  } else if (theGender === "Female" || theGender === "female") {
    document.write(`Hello Miss ${theName}<br>`);
  } else document.write(`Hello ${theName}<br>`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
