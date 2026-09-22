let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

//1st
if (haystack.includes(needle)) {
  console.log("Found ");
}

//2nd
if (haystack.indexOf(needle) !== -1) {
  console.log("Found ");
}

//3rd
if (haystack.lastIndexOf(needle) !== -1) {
  console.log("Found ");
}
