// function seconds() {
//   let secondsKata = document.querySelector(".seconds");
//   let seconds = new Date().getSeconds();
//   secondsKata.style.transform = `rotate(${seconds * 6}deg) translateY(-50%)`;
// }

// setInterval(seconds, 1000);

// function minutes(){
//     let minutesKata = document.querySelector(".seconds");
//     let minutes = new Date().getMinutes();
//     minutesKata.style.transform = `rotate(${seconds * 6}deg) translateY(-50%)`;
// }

// setInterval(minutes, 60000);

let hours = document.querySelector(".hours");

setInterval(() => {
  let secondKata = document.querySelector(".seconds");
  let seconds = new Date().getSeconds();
  secondKata.style.transform = `rotate(${seconds * 6}deg) translateY(-44%)`;
  let minuteKata = document.querySelector(".minutes");
  let minutes = new Date().getMinutes();
  minuteKata.style.transform = `rotate(${minutes * 6}deg) translateY(-44%)`;
  let hourKata = document.querySelector(".hours");
  let hours = new Date().getHours();
  hourKata.style.transform = `rotate(${
    hours * 30 + (minutes / 60) * 30
  }deg) translateY(-44%)`;
}, 1000);
