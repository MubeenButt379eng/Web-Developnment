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
 