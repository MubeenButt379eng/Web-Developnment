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

//*nested function scope

function one(){
    const userName= "Mubeen"

    function two(){
const website= "youtube"
console.log(userName);
    }
    // console.log(website);
    two()
}
one()

if (true){
    const userName= "Mubeen"
    if (userName === "Mubeen"){{
        const website= " youtube"
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);
}


//todo ++++++++++++++++++

function addOne(num){
return num + 1
}
addOne(5)


//* functio expression as a variable
const addTwo = function(num){
    return num + 2
}
addTwo(5)