let price = 100;
let discount = false;
let discountAmount = 40;
let country = "KSA";

if (discount === true && country === "Egypt") {
  price -= discountAmount;
} else if (discount === true || country === "Egypt") {
  price -= discountAmount - 20;
} else {
  price -= discountAmount - 30;
}

console.log(price);
