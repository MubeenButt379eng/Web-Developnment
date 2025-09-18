//todo const tinderUser = new Object() //* this is a singleton object 

const tinderUser = {} //* non singleton object


tinderUser.id = "abc"
tinderUser.name = "Joe"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
email: "some@mail.com",
fullname:{
    userFullName:{
        firstName :"Abdul",
        lastName:"Mubeen",
    }
}
}
// console.log(regularUser.fullname.userFullName);

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "a", 4: "b"}


// const obj3 = Object.assign({}, obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);


const user = [
{
    id : 1,
    email: "h@gamil.com",
},
{
    id : 1,
    email: "h@gamil.com",
},
{
    id : 1,
    email: "h@gamil.com",
},
{
    id : 1,
    email: "h@gamil.com",
},

]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//todo +++++++++++object de structureing +++++++++++

const course ={
    courseName: "javascript",
    price: "999",
    courseInstructor: "hitesh",
}

//* one way to de struct the object
// const {courseInstructor}= course
// console.log(courseInstructor);

//* another way is 

const {courseInstructor: instructor}=  course
console.log(instructor);

//todo Api study 

// {
//     "name": "mubeen",
//     "courseName": "js in hindi",
// }