

function multiply(num){
    return num * 5
}
multiply.power = 2;

console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);


// **Ye ek blueprint ya sanche (mould) ki tarah hai. Jab bhi aap kisi ko "User" banana chahte hain, aap isay use karte hain. this ka matlab hai "wo naya object jo abhi banne wala hai".


function createUser(userName,score){
    this.userName = userName
    this.score = score
}

//**JavaScript mein har function ke paas ek extra space hoti hai jise Prototype kehte hain.

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Score for ${this.userName} is ${this.score}`);
}

const chai= new createUser('chai',23)
const tea= new createUser('tea',22)

chai.increment()
chai.printMe()

// *Jab aap new keyword use karte hain, toh 4 kaam hote hain:

// *Ek khali object {} banta hai.

// *Us khali object ka link createUser ke prototype se jorr diya jata hai.

// *this ko us naye object se connect kar diya jata hai taake userName aur score wahan save ho sakein.

// *Wo naya object aapko mil jata hai.

 
