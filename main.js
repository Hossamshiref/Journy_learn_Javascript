function multiply(...numbers) {
  let answer = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      answer *= Math.trunc(numbers[i]);
    }
    if (Number.isNaN(numbers[i])) continue;
  }
  document.write(`${answer}<br>`);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
