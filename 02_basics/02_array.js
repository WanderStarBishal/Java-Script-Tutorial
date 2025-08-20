marvel_heroes = ["ironman","Hulk","spiderman"];
dc_heroes = ["flash","superman","wonder woman"];

// const allheroes = marvel_heroes.concat(dc_heroes);
// console.log(allheroes);

// const all_new_heroes = [...marvel_heroes,...dc_heroes];
// console.log(all_new_heroes);

// let real_no = [1,2,3,4,5,[6,7,8,[4,5,7,[3,4,2]]],9];
// let new_real_no = real_no.flat(Infinity);
// console.log(new_real_no);

console.log(Array.isArray("Bishal"));
console.log(Array.from("Bishal"));
console.log(Array.from({name:"Bishal"})); //interesting

let num1 = 100;
let num2 = 200;
let num3 = 300;

console.log(Array.of(num1,num2,num3));
