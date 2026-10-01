let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "lap"];
let color = ["red", "blue", "Green"];
let count = 4;

document.write(`<h2>Show ${count} products</h2>`);

for (let i = 0; i < count; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < color.length; j++) {
    document.write(`<h4>${color[j]}</h4>`);
  }
  document.write(`<h4>${color.join(" | ")}</h4>`);
  document.write(`</div>`);
}
