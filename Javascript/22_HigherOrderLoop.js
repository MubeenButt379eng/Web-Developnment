//*for of 


const arr = [1,2,3,4,5]
 for (const num  of arr) {
    // console.log(num);
    
 }


 const greeting = "hello world";
 for (const greet of greeting) {
    // console.log(greet);
  
 }


 //* Maps


 const map = new Map()
 map.set('pk','pakistan')
//  map.set('pk','pakistan') //todo unique value k liya jany jaty hain and jo order follow kiya hi usi ma rehtay hain
//  console.log(map);


 for (const [key ,value] of map) {
    // console.log(key ,":.", value);
    
 }



 const myObject = {
    'game': 'hhh',
    'game2': 'jjjj'
 }
//  for (const [key,value] of object) {
//     console.log(key ,":-", value);
//  }

const myObj ={
js: 'javascript',
cpp : 'c++',
rb: "ruby",
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const prog = ["js","rb","py"]
for (const key in prog) {
    // console.log(prog[key]);
    
}


//  const map1 = new Map()
//  map.set('pk','pakistan')
//  for (const key in map1) {
     
//  }

//todo foreach loop

const coding = ["js","ruby","java","cpp"]
//   coding.forEach( function (item){
// console.log(item);
//   })

// coding.array.forEach((item) => {
//     console.log(item);
// });
 

// coding.forEach((item,index,arr)=>{
// console.log(item,index,arr);
// })

const myCode =[
    {
        languague: "js",
    fileName:"javasc"
    },
     {
        languague: "java",
    fileName:"java"
    },
     {
        languague: "python",
    fileName:"python"
    },
]
myCode.forEach((item)=>{
console.log(item.languague);
})