let growth = document.querySelector('#growth');
let h5 = document.querySelector('h5');
let button = document.querySelector('button');

let grow = 0

button.addEventListener('click',function(){
    let int = setInterval(function(){
        grow++
        h5.innerHTML = grow +'%'
        growth.style.width = grow + '%'
    },30)

    setTimeout(function(){
        clearInterval(int)
        button.style.opacity = 0.6
        button.innerHTML = 'Downloaded'
        button.style.pointerEvents = "none";
    }, 3000)
})