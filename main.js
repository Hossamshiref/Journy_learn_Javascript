function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if (operation === "add") {
    document.write(`${firstNum + secondNum}<br>`);
  } else if (operation === "subtract") {
    document.write(`${firstNum - secondNum}<br>`);
  } else if (operation === "multiply") {
    document.write(`${firstNum * secondNum}<br>`);
  } else if (operation === "") {
    document.write(`${firstNum + secondNum}`);
  }

  if (typeof secondNum === "undefined") {
    document.write(`Second Number Not Found<br>`);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
