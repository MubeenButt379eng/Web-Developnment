//todo 4 pillar  of dom

// 1: selection of an Element
// 2: changig HTML
// 3: changing CSS
// 4:event listener

const a = document.querySelector("h1")
// a.innerHTML = "changed by js"

a.innerHTML= "hello changing the style";
a.style.color= "red";
a.style.backgroundColor= "black";

a.addEventListener("click", function(){
// console.log("you clicked me");
a.innerHTML= "this code changed by clicking";
a.style.color= "yellow";
a.style.backgroundColor= "blue";    
})


let btn = document.querySelector("button");
let bulb = document.querySelector(".bulb");
let  flag = 0;


btn.addEventListener("click",function(){
    if(flag==0){
         bulb.style.backgroundColor= "yellow";
         flag=1;
    }
    else{
         bulb.style.backgroundColor= "transparent";
         flag=0;
    }
})