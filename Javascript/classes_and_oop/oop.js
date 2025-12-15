 
 //** object literal */
 
// * Object literal JavaScript mein object banane ka sab se simple tareeqa hota hai.
// *👉 Jab aap ko sirf aik object chahiye ho, to yeh best hota hai.


const user={
    userName:"Abdul",
    loginCount: 8,
    signOut :true,

    getUserDetail : function(){
        console.log(`Got user detail`);
        console.log(`username: ${this.userName}`);
        console.log(this);
    }
}
// console.log(user.getUserDetail());

//  **--constructor function
//*const promiseOne = new Promise()
//**const data = new Date()
//** (new) yeah ap ko allow krta hi k  ak hi object literal sy multiple instance bana sskaty hain */



//** */ Constructor function tab use hota hai jab aap ko same structure ke multiple objects banane hon.
//** */ 👉 new keyword use hota hai.
 
function User(userName , logicalCount , isLoggedIn){
    this.userName = userName;
    this.logicalCount = logicalCount;
    this.isLoggedIn = isLoggedIn;

    return this
}
const userOne = new User('hello',12,true)
const userTwo = new User('heo',11,false)

console.log(userOne);
console.log(userTwo);

 