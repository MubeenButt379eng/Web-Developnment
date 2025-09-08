
const marave_heros = ["thor","Ironman","spiderman"];
const dc_heros = ["superman", "batman"];

// marave_heros.push(dc_heros)
// console.log(marave_heros);

//todo 
// const concat = marave_heros.concat(dc_heros);
// console.log(concat);

const newHeroes = [...marave_heros,...dc_heros]
console.log(newHeroes);

const anotherArr = [1,2,3,[4,5,6],[7,8,9]];

const resultArr = anotherArr.flat(Infinity)
console.log(resultArr);



console.log(Array.isArray("Mubeen"));
console.log(Array.from("Mubeen"));
console.log(Array.from({name:"Ali"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

