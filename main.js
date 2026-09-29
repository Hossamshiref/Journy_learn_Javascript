/*
  Loop
  - Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "lap"];
let i = 0;
for (;;) {
  console.log(products[i]);
  i += 2;
  if (i === products.length) break;
}
