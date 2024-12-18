let arr = [
  {
    dp: "https://media.istockphoto.com/id/1740247090/photo/female-indian-cricket-fan-wearing-an-indian-jersey-excited-cheering-for-a-team-female-sports.webp?a=1&b=1&s=612x612&w=0&k=20&c=XLTTmy_Nw6_S4JRXatxyVwz0qJvWgnO4wNJ76-h-tFE=",
    story:
      "https://images.unsplash.com/photo-1549570652-97324981a6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww-s",
  },
  {
    dp: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1462804993656-fac4ff489837?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    dp: "https://media.istockphoto.com/id/1740247090/photo/female-indian-cricket-fan-wearing-an-indian-jersey-excited-cheering-for-a-team-female-sports.webp?a=1&b=1&s=612x612&w=0&k=20&c=XLTTmy_Nw6_S4JRXatxyVwz0qJvWgnO4wNJ76-h-tFE=",
    story:
      "https://images.unsplash.com/photo-1549570652-97324981a6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww-s",
  },
];

// let clutter = "";
// let stories = document.querySelector("#stories");

// arr.forEach(function (elem, idx) {
//   console.log(elem.dp);
//   clutter += `<div class="story">
//           <img id=${idx}
//             src=${elem.dp}
//             alt=""
//           />
//         </div>`;
// });
// stories.innerHTML = clutter;

let shutter = "";
let stories = document.querySelector("#stories");

arr.forEach((sum, rdx) => {
  shutter += `<div class="story">
         <img id="${rdx}"
          src="${sum.dp}"
            alt=""
           />
        </div>`;
});
stories.innerHTML = shutter;

stories.addEventListener("click", function (sets) {
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[sets.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);

  let count = 0;

  setInterval(function () {
    document.querySelector("#loader").style.width = `${count++}vw`;
    document.querySelector("#loader").style.transition = "width 1.8s linear";
  }, 30);
});
