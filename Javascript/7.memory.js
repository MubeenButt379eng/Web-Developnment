//todo stack(primitive) and heap memory(non primitive)

let myYoutubeName = "Codevolution"; //string literal stored in stack memory
let anotherName = myYoutubeName; //another variable created in stack memory
console.log(anotherName); //Codevolution


let user ={
    email: "user@google.com",
    address : "22, wall street"
}

let user2 = user; //user2 is reference to user object in heap memory
user2.email = "gg@gmail.com";

console.log(user.email); //
console.log(user2.email); //