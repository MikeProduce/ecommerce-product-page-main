"use strict";

const minus = document.getElementById("minus");
const add = document.getElementById("plus");
const number1 = document.getElementById("num");
// Get the modal
const modal = document.getElementById("myModal");
// Get the button that opens the modal
const btn = document.getElementById("myBtn");
const btn1 = document.getElementById("myBtn1");
const btn2 = document.getElementById("myBtn2");
const btn3 = document.getElementById("myBtn3");
let i = 0;
let amount = i;

// add to how many shoes/product you want
add.addEventListener("click", function () {
  amount += 1;
  number1.innerHTML = amount;
});
minus.addEventListener("click", function () {
  amount = amount <= 1 ? 0 : (amount -= 1);
  return (number1.innerHTML = amount);
});

// next / previous controls on modal
function plusSlides(n) {
  showSlides((slideIndex += n));
}

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
  const slidesarr = [slides, slides1];
  slidesarr.forEach(function (arr) {
    if (n > arr.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = arr.length;
    }
    Array.from(arr).forEach((item) => (item.style.display = "none"));
    arr[slideIndex - 1].style.display = "block";
  });
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
const btns = [btn, btn1, btn2, btn3];
btns.forEach((number) => {
  number.addEventListener("click", function () {
    modal.style.display = "block";
  });
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

// shopping cart modal

// Get the modal
var shoppingmodal = document.getElementById("myShoppingModal");

// Get the button that opens the modal
var Shopbtn = document.getElementById("myShoppingBtn");

// When the user clicks on the button, open the modal
Shopbtn.onclick = function () {
  shoppingmodal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == shoppingmodal) {
    shoppingmodal.style.display = "none";
  }
};

// accordion js

// removing class list based on if the screen is big enough

var acc = document.getElementsByClassName("accordion");

// const removingFunc = function(n){
//   if ()
// }
// miguel is left off trying to get the accordian to not show up based on the screen size 

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
