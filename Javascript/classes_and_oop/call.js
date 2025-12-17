function SetUserName(userName){
    this.userName = userName
}


function createUser(userName,email,password){
    SetUserName.call(this,userName)

    this.email = email
    this.password = password
}

const chai = new createUser("chai","cahi@email.com","123")
console.log(chai);
 

// **.call() Method: "Zabardasti Connection"
// *Kabhi kabhi hum chahte hain ke ek function kisi aise object ke liye kaam kare jiska wo hissa nahi hai. .call() humein ijazat deta hai ke hum manually bata sakein ke this ki value kya honi chahiye.

// *Istemal kyun karte hain?

// *Function Borrowing: Ek object ka function doosre object ke liye use karna.

// *Context Pass karna: this ko fix karna taake wo sahi object ko point kare.