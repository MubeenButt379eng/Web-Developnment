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
console.log(loginUser("Mubeen"));