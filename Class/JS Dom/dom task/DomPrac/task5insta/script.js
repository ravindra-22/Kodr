let scroll=document.querySelector("#scroll")
let storyData = [
    {
        username: "Aditya",
        img:"https://images.unsplash.com/photo-1731331095592-c86db3fa1d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "Aditya",
        img:"https://images.unsplash.com/photo-1731331095592-c86db3fa1d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "Aditya",
        img:"https://images.unsplash.com/photo-1731331095592-c86db3fa1d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "Aditya",
        img:"https://images.unsplash.com/photo-1731331095592-c86db3fa1d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "Aditya",
        img:"https://images.unsplash.com/photo-1731331095592-c86db3fa1d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]
let clutter =''
storyData.forEach(function(value,index){
clutter =`<div class="stories">
          <img
            src="${value.img}"
            alt=""
          />
          <p>${value.username}</p>
        </div>`
        scroll.innerHTML =clutter
})
