"use strict";

const minus = document.getElementById("minus");
const add = document.getElementById("plus");
const number1 = document.getElementById("num");
const image = document.getElementById("image");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const allImages = [image, image1, image2, image3];

let i = 0;
let amount = i;

add.addEventListener("click", function () {
  amount += 1;
  number1.innerHTML = amount;
});
minus.addEventListener("click", function () {
  amount -= 1;
  number1.innerHTML = amount;
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

let slideIndex = 1;
showSlides(slideIndex);

function changeSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("Slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  Array.from(slides).forEach((item) => (item.style.display = "none"));
  slides[slideIndex - 1].style.display = "block";
}
