// let score = "44";
// let score = "44ab";
// let score  = null;
// let score = undefined;
let score = true;

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);


//todo "44" => 44
//todo "44ab" => NaN
//todo null => 0
//todo undefined => NaN
//todo true => 1
//todo false => 0   

let isLoggedIn  = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//todo 1 => true, 0 => false
//todo "" => false, "abc" => true



let SomeNumber = 77;
let stringNumber = String(SomeNumber);
console.log(typeof stringNumber);
console.log(stringNumber);
