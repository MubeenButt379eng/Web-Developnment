//todo string in javascript

const name = "Mubeen";
const secName = "butt";

//*console.log(name + "",secName); //concatenation (not to use this method)

// use baktics (``) for concatenation
console.log(`Hello my name is ${name} ${secName}`); //template literals

const gameName = new String("Football"); //string as object
console.log(gameName.length);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));
 

console.log(gameName.slice(0,4));


const newStringOne = "    Mubeen   ";
console.log(newStringOne.trim);


const url = "https://mubeeen.com/20";
console.log(url.replace('20','60'));
console.log(url.includes('mubeen'));
// console.log(gameName);