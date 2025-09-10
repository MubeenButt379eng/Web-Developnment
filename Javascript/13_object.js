// singleton 

//todo object literal
const mySym = Symbol("key1")


const user = {
    name: "Mubeen",
    "full name": "Abdul MubeenButt",
    [mySym]: "myKey1",
    age: 21,
    location: "gujrat",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Sunday"]
}

console.log(user.location);
console.log(user["location"]);

console.log(user["full name"]);
console.log(user[mySym]);

user.location = "Lahore"
// Object.freeze(user)
user.location = "Multan",
console.log(user);


user.greeting = function(){
    console.log("hello Js user");
}
console.log(user.greeting());



user.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
}

console.log(user.greetingTwo());