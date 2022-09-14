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

// adding button to how many orders you want of the product

add.addEventListener("click", function () {
  amount += 1;
  number1.innerHTML = amount;
});
minus.addEventListener("click", function () {
  amount -= 1;
  number1.innerHTML = amount;
});

// pictures and displays of the images

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

// next / previous controls 
function plusSlides(n) {
  showSlides(slideIndex += n);
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
  const slides1 = document.getElementsByClassName("Slide1");

  if (n > slides.length && slides1.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
    slideIndex = slides1.legnth;
  }

  // idkk wtf i did tbh lmaoooo i need to make this look better fuck
  Array.from(slides).forEach((item) => (item.style.display = "none"));
  slides[slideIndex - 1].style.display = "block";
  Array.from(slides1).forEach((item) => (item.style.display = "none"));
  slides1[slideIndex - 1].style.display = "block";
}

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");
const btn1 = document.getElementById("myBtn1");
const btn2 = document.getElementById("myBtn2");
const btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.addEventListener("click", function () {
  modal.style.display = "block";
});

btn1.addEventListener("click", function () {
  modal.style.display = "block";
});

btn2.addEventListener("click", function () {
  modal.style.display = "block";
});

btn3.addEventListener("click", function () {
  modal.style.display = "block";
});
// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// miguel idk wtf is going on but youre making it happen lol 
