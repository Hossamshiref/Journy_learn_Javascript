let names = ["Ahmed", "Hossam", "Mariam", "Esraa"];
let friends = ["Osama", "Marie", "Rahad"];
let family = ["EZZ", "Hesham", "Yassen"];

let all = names.concat(friends, family, "Moaz", 7, 9, ["Hsssam", "Maro"]);

console.log(all);

console.log(all.join());
console.log(all.join(" | "));
console.log(all.join(" @ "));
