const score = 100;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.4456;
console.log(otherNumber.toPrecision(3));


const anotherNumber = 100000;
console.log(anotherNumber.toLocaleString('en-PK'));


//todo +++++++++++++ Math +++++++++++++

// console.log(Math);

// console.log(Math.abs(-4)); // it can change the value - into +
// console.log(Math.round(6.788));
// console.log(Math.ceil(6.788)); 
// console.log(Math.floor(6.788));


// console.log(Math.min(5,4,8,9));


console.log(Math.random()); // obtain the value btw 0 and 1 
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


 const min = 10;
 const max = 20;

 console.log(Math.floor(Math.random() * (max - min +1) + min ))