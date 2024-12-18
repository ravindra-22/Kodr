let cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", function(dots){
    cursor.style.left = dots.x +"px";
    cursor.style.top = dots.y +"px";
})