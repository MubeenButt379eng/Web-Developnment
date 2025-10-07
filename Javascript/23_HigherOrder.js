
// const coding = ["js","ruby","java","cpp"]
// coding.forEach( (item)=>{
//     console.log(item);
// })
//* for each jo  hi yeah value ko return nhi krta is liya hum filter use krtay hain
const myNum =[1,2,3,4,5,6,7,8,9]

// const newNum = myNum.filter((num)=>num>4)
// console.log(newNum);

//todo or
// const newNum = myNum.filter((num)=>{
//     return num>4
// })
// console.log(newNum);
 

// Array of Objects: Books Data Store
 // Array of Objects: Books Data Store (Updated Genre)
const library = [
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988,
        genre: "History" // Genre updated
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        year: 2011,
        genre: "History" // Genre updated
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "History" // Genre updated
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "History" // Genre updated
    }
];

// let userBook = library.filter((bk)=> bk.genre === 'History')
let userBook = library.filter( (bk)=>{return bk.year >1949 && bk.author === "Harper Lee"

})
 
// console.log(userBook);

// library.forEach(element => {
//     console.log(element.author);
// });