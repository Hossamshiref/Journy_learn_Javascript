let name = "Hossam shiref";

console.log(name.length);

console.log(name.substring(7));
console.log(name.substring(7, 12));
console.log(name.substring(12, 7));
console.log(name.substring(-7, 6));
console.log(name.substring(name.length - 13, name.length - 7));

console.log(name.substr(0));
console.log(name.substr(0, 6));
console.log(name.substr(7, 5));
console.log(name.substr(-6, 6));

console.log(name.includes("o"));
console.log(name.includes("sh", 8));

console.log(name.startsWith("H"));
console.log(name.startsWith("h"));
console.log(name.startsWith("s", 7));

console.log(name.endsWith("f"));
console.log(name.endsWith("m", 6));
console.log(name.endsWith("o"));
