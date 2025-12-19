class User {
    constructor(userName) {
        this.userName = userName
    }

    logMe(){
        console.log(`UserName is ${this.userName}`);
    }
    static createId(){
        return `123`
    }
}
const Abdul = new User('mubeen')
//  console.log(Abdul.createId());
 console.log(Abdul.logMe());

 class Teacher extends User{
    constructor(email,userName){
        super(userName)
        this.email = email
    }
}
const phone = new Teacher('iphone','i@phone.com')
 phone.logMe()
 console.log(phone.createId());

//  **JavaScript mein static keyword ka istemal classes ke andar hota hai. Iska asaan matlab ye hai ke wo property ya method Class ka apna hissa hai, na ke us class se banne wale objects (instances) ka.

//* Jab aap kisi cheez ko static banate hain, to aapko use access karne ke liye new keyword se object banane ki zaroorat nahi parti.