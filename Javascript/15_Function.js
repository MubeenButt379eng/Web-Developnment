function myName(){
    console.log("MUbeebutt");
}
// myName();


// function addTwoNumbers(number1 ,number2){
//     console.log(number1+number2);
// }
//  const Result = addTwoNumbers(3,5);
//  console.log("Result is", Result);


function addTwoNumbers(number1 ,number2){
    // let result = number1+number2;
    // return result
    //todo or 
    return number1 + number2
}
const Result = addTwoNumbers(3,5);
//  console.log("Result is", Result);


function loginUser(username){
    if(!username){
console.log("please enter username");
return
    }
    return `${username} just loged in`
}
// const user = loginUser("mubeen")
//  console.log(user);
//todo or
// console.log(loginUser("Mubeen"));




function calculateCartPrice(...num1){
    return num1
}
//  console.log(calculateCartPrice(5,200,400,600));

const user ={
    userName: "MUbeen",
    price: 500,
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}
// handleObject(user);
//todo or
handleObject({userName: "Ali", price: 600});


const myArray= [200,400,100]
function returnValue (getArray){
    return getArray[1]

}
//  console.log(returnValue(myArray));
//todo or 
console.log(returnValue([300,600,900]));