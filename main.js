let a = 10;
let b = "20";
let c = 80;

console.log(+b++); //20
console.log(++c); //81
console.log(a--); //10
console.log(a); //9
console.log(++a + +b++ + +c++ - +a++); //102
console.log(++a + -b + +c++ - -a++ + +a); //97
console.log(--c + +b + --a * a + --a - +true); //258
