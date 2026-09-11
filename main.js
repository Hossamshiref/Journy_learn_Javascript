let price = 100;
let discount = false;
let discountAmount = 40;
let country = "Egypt";
let student = true;

if (discount === true) {
  price -= discountAmount;
} else if (country === "Egypt") {
  if (student === true) {
    price -= discountAmount + 10;
  } else {
    price -= discountAmount - 20;
  }
} else {
  price -= discountAmount - 30;
}

console.log(price);
