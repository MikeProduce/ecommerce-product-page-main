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

function setSlide(number) {
  clearSelected();
  currentSlide(number);
  document.querySelectorAll(".thumbImage")[number - 1].style.border =
    "3px solid orange";
}
function clearSelected() {
  Array.from(document.querySelectorAll(".thumbImage")).forEach(
    (item) => (item.style.border = "")
  );
}
var slideIndex = 1;
showSlides(slideIndex);
function changeSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  Array.from(slides).forEach((item) => (item.style.display = "none"));
  slides[slideIndex - 1].style.display = "block";
}
