


for (let  i  = 0;  i  < 10;  i ++) {
    const element =  i ;
    // console.log(element);
 }


 for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop: ${i}`);
for (let  j = 0;  j <=10;  j++) {
    // console.log(`Inner loop ${j} and inner loop ${i}`);
    // console.log(i + '*'+j +'='  + i*j);
}
 }


 let myArray =["hhh","bbbb","ccc"]
 for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
 }

 //* break and continue
// let num = 10
 for (let index = 1; index <=20; index++) {
    if (index == 5) {
        // console.log('5 is dected');
        break
    }
    // console.log(`value of i is ${index}`);
    // console.log(num ,'*' ,index ,"=", num*index );
    
 }
 for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log('5 is dected');
    continue
    }
    console.log(`value of i is ${index}`);
    // console.log(num ,'*' ,index ,"=", num*index );
    
 }