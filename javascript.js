const itemName = document.querySelector(".productName").innerHTML;
const basePrice = document.querySelector(".priceValue").innerHTML;
const itemPic = document.querySelector(".big-img").src;
const parentElement = document.querySelector(".ParentElement");
const addCart = document.querySelector(".addcart");
let quantityItems = document.querySelector(".num").innerHTML;
console.log(quantityItems);

const item = {
    name: itemName,
    image: itemPic,
    price: +basePrice,
};

// miguel you are currently working on how to update the UI so that the number value inputed is multiplied by the price
addCart.addEventListener("click", function () {
    //when the add to cart button is pushed it will add this text/imgs of the items bought//
    let result = `<li class="buyItem">
      <img width="100px" height="100px" src="${item.image}">
      <div>
        <h5>${item.name}</h5>
        <h6>$${item.price * quantityItems}</h6>
      </div>
      <button class="delete">delete-me</button>
    </li>`;
    parentElement.innerHTML = result;

    //when a button is pushed on the inside it will delete the items and put a text that says there is nothing in the cart//

    const deleteCart = document.querySelector(".delete");

    deleteCart.addEventListener("click", function () {
        let noItems = `<h5>Your cart is empty.</h5>`;
        parentElement.innerHTML = noItems;
    });
});
