let btn = document.querySelector("#add");
let h5 = document.querySelector("h5");
// let rmv = document.querySelector("#rmv")
let flag = 0

btn.addEventListener('click', function(){
    if(flag == 0){
        h5.innerHTML = 'Friends';
        h5.style.color = "green";
        btn.innerHTML = "Remove Friend";
        btn.style.backgroundColor = "grey"
        btn.style.color = "black";
        flag = 1;
    }else{
        h5.innerHTML = 'Stranger';
        h5.style.color = "red";
        btn.innerHTML = "Add Friend"
        btn.style.backgroundColor = "cadetblue"
        btn.style.color = "white";
        flag = 0;
    }
})

// rmv.addEventListener('click', function(){
//     h5.innerHTML = "Stranger";
//     h5.style.color = "red";
// })


// 2nd time self practice 

// let btn = document.querySelector('#add');
// let h5 = document.querySelector('h5');
// // let rmv = document.querySelector('#rmv');
// let check = 0

// btn.addEventListener('click', function(){
//     if(check == 0){
//         h5.innerHTML = "Friends";
//         h5.style.color = "green";
//         check = 1;
//     }else{
//         h5.innerHTML = "Stranger";
//         h5.style.color = "red";
//         check = 0;
//     }
    
// })

// // rmv.addEventListener('click', function(){
// //     h5.innerHTML = "Stranger";
// //     h5.style.color = "red";
// // })

