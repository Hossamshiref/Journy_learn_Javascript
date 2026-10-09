// function Hello() {
//   return "Hello";
// }
// document.write(Hello());

let Hello = () => {
  return `Hello<br>`;
};
document.write(Hello());

// let calc = function (num1, num2) {
//   return `${num1 + num2}<br>`;
// };
// document.write(calc(10, 20));

let calc = (num1, num2) => `${num1 + num2}<br>`;
document.write(calc(10, 20));
