let a = 10;
const b = 20;
// var c = 30;
// let a = 300;

if (true) {
    let a = 40; // Block-scoped variable
    const b = 50; // Block-scoped constant
    // var c = 60; // Function-scoped variable (overwrites the outer 'c')

}
// console.log(c);
console.log(a);

//todo donot use var because it is function scoped and can lead to unexpected behavior.