"use strict";

const minus = document.getElementById("minus");
const add = document.getElementById("plus");
const number = document.getElementById("num");
const images = document.getElementById("round-of-images");

let i = 0;
let amount = i;

add.addEventListener("click", function () {
  amount += 1;
  number.innerHTML = amount;
});
minus.addEventListener("click", function () {
  amount -= 1;
  number.innerHTML = amount;
});

images.addEventListener("click", function (event) {
  if (event.target.nodeName == "IMG") {
    event.target.style.border = "3px solid orange";
  }
});
