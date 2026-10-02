let start = 0;
let swappedName = "elZerO";

// Output
// "ELzERo"

for (let i = 0; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase())
    document.write(swappedName[i].toUpperCase());
  if (swappedName[i] === swappedName[i].toUpperCase())
    document.write(swappedName[i].toLowerCase());
}
