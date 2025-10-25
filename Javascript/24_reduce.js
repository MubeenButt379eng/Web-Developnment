const myNum =[1,2,3,]

// const myTotal =myNum.reduce(function(acc,currval){
//     console.log(`acc : ${acc} and curr:${currval}`);
//     return acc + currval
// },0)

const myTotal = myNum.reduce((acc,curr) => acc+curr,0)
// console.log(myTotal)

const shopingCart = [
    {
itemName :"js",
price: 29999,

    },
     {
itemName :"pty",
price: 29,

    },
     {
itemName :"java",
price: 299,

    },
    
]
const price=shopingCart.reduce(( acc,item)=>acc +item.price,0)
console.log(price);
