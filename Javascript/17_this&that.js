const user={
userName: "mubeen",
price:999,
welcomeMessage: function(){
    console.log(`${this.userName}, welcome to website`);
    // console.log(this);
}
}
// user.welcomeMessage();
// console.log(this); //todo answer is empty

// function one(){
//     let userName = "mubeen";
//     console.log(this.userName); //todo cannot accss this in function but object access it 
// }
// one();


// const one = () => {
//     let userName = "mubeen";
// console.log(this.userName);
// }

// const addTwo = (a , b)=>{
// return a+b;
// }

// const addTwo = (a , b)=>   a+b;
const addTwo = (a , b)=>   (a+b);
    
    
console.log(addTwo(3,4));