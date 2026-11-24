let nums = [1, 2, 3, 4, 5];

let reduce = nums.reduce(function (acc, current, index, arr) {
  document.write(`Accumulator is: ${acc}<br>`);
  document.write(`Current is: ${current}<br>`);
  document.write(`Index is: ${index}<br>`);
  document.write(`Array is: ${arr}<br>`);
  document.write(`Accumulator + Current = ${acc + current}<br>`);
  document.write(`##########<br>`);
  return acc + current;
}, 10);
document.write(`${reduce}`);
