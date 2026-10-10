function specialMix(...data) {
  // Your Code Here
  let answer = 0;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") answer += data[i];
    else if (!isNaN(parseInt(data[i]))) answer += parseInt(data[i]);
  }
  // document.write(parseInt("10Testing"));
  if (answer > 0) return `${answer}`;
  if (answer === 0) return `All Is Strings`;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
