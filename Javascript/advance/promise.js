const promiseOne = new Promise(function(resolve,reject){
//**Do an async task
//**db call ,network */ */
setTimeout(() => {
    console.log("async task is completed");
    resolve()
},1000);
})

promiseOne.then(function(){
    console.log('promise consuemd');
})
//*** promise 2 */
 new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('two task is complete');
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 is resolved");
})


// ****promise 3********
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({userName:'chai', email:'hello@eg.com'})
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
})

// ********promise 4*****
promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({userName:'Abdul',password:'123'})
        }else {
            reject('error: something went wrong')
        }  
    }, 1000);
})
 promiseFour.then((user)=>{
    console.log(user);
    return user.userName
 })
 .then((userName)=>{
    console.log(userName); 
 })
 .catch(function(error){
    console.log(error);
 }).finally(()=> console.log('The promise is either resolve or rejected'))


 //***promise 5 */
 const promiseFive = new Promise(function(resolve,reject){
     setTimeout(() => {
        let error = true;
        if(!error){
            resolve({userName:'python',password:'123'})
        }else {
            reject('error: python went wrong')
        }  
    }, 1000);
 })

async function consumePromiseFive() {
     try {
        const response = await promiseFive
        console.log(response);
     } catch (error) {
        console.log(error);
     }
}
consumePromiseFive()


//***promise 6 */
// async function getAllUser() {
//     try {
//     const response = await fetch('https://api.github.com/users/Mubeenbutt379eng')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E",error);
//     }
// }
// getAllUser()



// *****second  way
fetch('https://api.github.com/users/Mubeenbutt379eng')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))