 

class user {
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`USERNAME is ${this.userName}`)
    }
}
// const chai = new user ('Abdul')
// chai.logMe()

class Teacher extends user{
    constructor(userName,email,password){
        super(userName)
        this.email = email
        this.password  = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.userName}`);
    }
}
const chai = new Teacher('chai','chai@gmail.com','124')
chai.addCourse()

const Tea = new user ('AbdulMUeen')
Tea.logMe()
chai.logMe()
console.log(chai instanceof Teacher);
