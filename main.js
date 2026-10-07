// function calc(num1, num2) {
//   document.write(`${num1 + num2}<br>`);
// }

// console.log(calc(10, 20));

let calc = function (num1, num2) {
  document.write(`<br>${num1 + num2}<br>`);
};

console.log(calc(10, 20));

document.getElementById("Show").onclick = function () {
  document.write(`Hello<br>`);
};

setTimeout(function () {
  document.write(`Good`);
}, 2000);
