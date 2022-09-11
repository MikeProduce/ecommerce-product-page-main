"use strict";

const minus = document.getElementById("minus");
const add = document.getElementById("plus");
const number = document.getElementById("num");

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
