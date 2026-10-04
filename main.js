let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
// "1 => Sayed"
// "2 => Mahmoud"

while (index < friends.length) {
  if (
    Number.isInteger(friends[index]) === false &&
    friends[index][counter] !== "A"
  )
    console.log(friends[index]);
  index++;
}
