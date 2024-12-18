let main = document.querySelector("main");
let img = document.querySelectorAll("img");

img.forEach(function(){
    img.addEventListner("click", function(){
        this.src = this.dataset.main;
    })
})