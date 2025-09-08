const myArr = [0,1,2,3,4,5,6]

const myHeors = ["abc","xyz"];


const myArr2 = new Array(1,2,3,4,5,)
console.log(myArr[0]);

//* method of array im js 
myArr.push(7);// mean add the array at the end
myArr.pop(); //todo mean remove the last value from the array

myArr.unshift(9);//todo add the value at the start
myArr.shift(); //todo remove the value at the start
console.log(myArr);

console.log(myArr.includes(7));
console.log(myArr.indexOf(2));

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//* +++++++++++++ slice and splice method ++++++++++++++++

console.log("A" , myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3);
console.log("C" , myArr);
console.log(myn2);