let elem = document.querySelectorAll(".parent");
let elemImage = document.querySelector(".parent img");
elem.forEach(function (pass) {
  pass.addEventListener("mouseenter", function () {
    pass.children[2].style.opacity = 1;
  });
  pass.addEventListener("mouseleave", function () {
    pass.children[2].style.opacity = 0;
  });
  pass.addEventListener("mousemove", function (dets) {
    pass.children[2].style.left = dets.x + "px";
  });
});
