let nums = [1, 2, 3, 4, 5];

let addMap = nums.map(function (el) {
  return el + el;
});
document.write(`${addMap}<br>`);

let addFilter = nums.filter(function (el) {
  return el + el;
});
document.write(`${addFilter}<br>`);

let filter = nums.filter(function (el) {
  return el % 2 === 0;
});
document.write(`${filter}<br>`);
