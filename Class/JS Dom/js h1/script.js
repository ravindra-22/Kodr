let h1= document.querySelector("h1");
console.log(h1);
h1.innerHTML = "heyhello";
h1.addEventListener("dblclick", function(){
    h1.style.color = "red";
})