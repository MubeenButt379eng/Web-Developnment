// let myName = "Abdul     "

// console.log(myName.trim().length)


let myHero = ['thor','spiderMan']

let heroPower = {
    thor: "hammer",
    spiderMan: 'sling',

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderMan}`);
    }
}
Object.prototype.Abdul = function(){
    console.log(`Abdul is present in all object`);
}
Array.prototype.hyAbdul = function(){
    console.log(`Abdul is present in all array`);
}

//  heroPower.Abdul()
myHero.Abdul()
myHero.hyAbdul()

// heroPower.hyAbdul()
 

// *inheritance

const user= {
    email:'hello@@gmail.com'
}
const Teacher={
    makeVideo: 'true'
}
const TeacherSupport ={ 
    isAvailable : 'false'
}
const TASupport = {
    makeAssignment:'js assign',
    fullTime:"true",
    __proto__: TeacherSupport
}
Teacher.__proto__= user

//*we use modern syntax

Object.setPrototypeOf(TeacherSupport,Teacher)



let anotherUserName = "AbdulMubeenButt     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}
anotherUserName.trueLength()

'daoud'.trueLength()
'hello'.trueLength()