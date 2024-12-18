let str = "hello";

function rString(str) {
  let arr = str.split("");
  let reverseArr = arr.reverse();
  return reverseArr.join("");
}

// console.log(reverseArr);
// // (rString(str));

if (str == rString(str)) {
  console.log("pallendrome");
} else {
  console.log("not palendrome");
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
  } else {
    if (i % 3 == 0) {
      console.log("fizz");
    } else {
      if (i % 5 == 0) {
        console.log("buzz");
      } else {
        console.log(i);
      }
    }
  }
}
