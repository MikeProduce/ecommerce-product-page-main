"use strict";

const minus = document.getElementById("minus");
const add = document.getElementById("plus");
const quantity = document.getElementById("num");
const modal = document.getElementById("myModal");
const closebtn = document.getElementById("closebtn");
const icon = document.getElementById("icon");
const shoppingmodal = document.getElementById("myShoppingModal");
const Shopbtn = document.getElementById("myShoppingBtn");
const span = document.getElementsByClassName("close")[0];
const btnAll = document.querySelectorAll('#btn')


// add to how many shoes/product you want
let i = 0;
let amount = i;

add.addEventListener("click", function () {
    amount += 1;
    quantity.innerHTML = amount;
});

minus.addEventListener("click", function () {
    amount = amount <= 1 ? 0 : (amount -= 1);
    return (quantity.innerHTML = amount);
});

// next / previous controls on modal
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// pictures and displays of the images that are selected
function setSlide(number) {
    clearSelected();
    currentSlide(number);
    document.quemrySelectorAll(".thumbImage")[number - 1].style.border =
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

// makes adjustments to the user resizing the window and based on width the user can open the modal 
window.addEventListener("resize", function(event) {
    let screenSize = document.body.clientWidth;
    btnAll.forEach((number) => {
        number.addEventListener("click", function () {
            if (screenSize > 768){modal.style.display = "block"}
             else {modal.style.display = 'none'}
        });
    });

});
// this is on load so when the user loads into the site itll take that width and input it to the activation of the modal 
let screenSizeOnLoad = document.body.clientWidth;
btnAll.forEach((number) => {
    number.addEventListener("click", function () {
        if (screenSizeOnLoad > 768){
         modal.style.display = "block"}
         else {modal.style.display = 'none'}
    });
});


// When the user clicks on the button, open the modal 


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
// When the user clicks on the button, open the modal
Shopbtn.addEventListener('click', function(){
    shoppingmodal.style.display = "block";
});
// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click',function(event){if (event.target == shoppingmodal) {
    shoppingmodal.style.display = "none";
}});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
icon.addEventListener("click", function myFunction() {
    const topnav = document.getElementById("myTopnav");

    if (topnav.className === "topnav") {
        topnav.className += " responsive";
        topnav.style.width = "250px";
    } else {
        topnav.className = "topnav";
    }
});
// this button deletes the responsive class and also deletes the inline style css in the html
closebtn.addEventListener("click", function closeNav() {
    document.getElementById("myTopnav").style.removeProperty("width");

    document.getElementById("myTopnav").className = "topnav";
});



