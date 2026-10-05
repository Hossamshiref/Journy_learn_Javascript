function sum(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `Result Of Numbers Is ${result}`;
}

document.write(sum(20, 30, 100));
