let nums = [1, 2, 3, 4, 5];

let add = [];
for (let i = 0; i < nums.length; i++) {
  add.push(nums[i] + nums[i]);
}
document.write(`${add}<br>`);

let newFeature = nums.map(function (element, index, array) {
  return element + element;
}, 4);
document.write(`${newFeature}<br>`);

let withArrow = nums.map((element) => element + element);
document.write(`${withArrow}<br>`);

function addition(element) {
  return element + element;
}

let withAddition = nums.map(addition);
document.write(`${withAddition}<br>`);
