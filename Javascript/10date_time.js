

let date = new Date()
// console.log(date.getFullYear());
// console.log(date.toString());

// console.log(date.toDateString());

// console.log(date.toLocaleString());

// console.log(date.toISOString());

// console.log(date.toJSON());

// console.log(date.toLocaleDateString());

// console.log(date.toLocaleTimeString());

// console.log(typeof date);

// const myDateCreated = new Date(2024,0,17);
// console.log(myDateCreated.toDateString());
// const myDateCreated = new Date(2024,0,17,5,0);

const myDateCreated = new Date("01-14-2024");
// console.log(myDateCreated.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myDateCreated.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday : "long",
})