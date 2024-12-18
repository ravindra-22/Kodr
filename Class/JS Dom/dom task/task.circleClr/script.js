
let btn= document.querySelector("button");
let circle= document.querySelector("#circle");

let flag = 0;

btn.addEventListener("click", function(){
    if(flag === 0){
        circle.style.backgroundColor = "yellow";
        flag = 1;
    }
   else{
    circle.style.backgroundColor = "transparent";
        flag = 0;
   }
})

