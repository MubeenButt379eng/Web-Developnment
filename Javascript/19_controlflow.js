// if statement

const isloggedIn = true;
const temp = 45;

if (temp<50) {
// console.log("excuted");
}

//todo <,>,<=,>=,==,===,!=,!==

// const score = 200;
// if(score>100){
//     const power = "fly"
//     console.log(`user power is ${power}`);
// }


// const balance = 1000;
//  if(balance>500) console.log("you are rich"); domort use that one statement in real world

// if (balance < 500){
//     console.log("you are poor");
// }else if(balace < 700){
//     console.log("you are middle class" );
// }else{
//     console.log("you are rich");
// }

// const userLoggedIn = true;
// const debitCard = true;
// if (userLoggedIn && debitCard){
//  console.log("allow to buy");
    
// }

// const userLoggedInGoogle= false;
// const userLoggedInFacebook = true;
// if(userLoggedInGoogle || userLoggedInFacebook){
//     console.log("allow to buy");
// }

//todo ++++++++++++ switch statement+++++++++++
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3;
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     default:
//         console.log("defaiult case");
//         break;
// }

//todo truthy and falsy value 
const email ="m@.ai";
if(email){
    console.log("eamil is valid");
}else{
    console.log("dont email");
}
// falsy value

//*false ,0,-0,bigint 0n, "",null ,undefined,NaN

//truthy value
//*[], "0", "false", " ",{},function(){},

// if (email.length === 0){
// console.log("array is empty");
// }

const emptyObj={}
if (Object.keys(emptyObj).length===0){
console.log("object is empty");
}


//* NUllish coalescing operator(??)

let val1;
// val1 = 5?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 10;


// console.log(val1);

//* ternaty operator

//*condition ? true : false

const iceTea = 100
iceTea > 80 ? console.log("led tham 50 "): console.log("gat");