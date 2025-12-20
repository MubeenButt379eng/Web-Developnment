const store = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(store);
// console.log(Math.PI);

const chai = {
    name:'chai',
    price:'200',
    isAvailable:true,
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    writable : false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
 

 