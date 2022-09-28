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
    // only calls the num element when the button is clicked
    let quantityItems = document.querySelector(".num").innerHTML;
    console.log(quantityItems);

    //when the add to cart button is pushed it will add this text/imgs of the items bought//
    if (quantityItems > 0) {
        let result = `<li class="buyItem">
        <div class="inlineShop">
      <img class="shopimg" src="${item.image}">
      </div>
      <div class="inlineShop">
        <h5>${item.name}</h5>
        <h6 data-end="$${item.price * quantityItems}.00">$${
            item.price
        }.00 x ${quantityItems} </h6>
      </div>
        <div class="inlineShop deletemove">
            <button class="delete"><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg></button></div>
    </li>
    <li>
    <button class="addcart1">Checkout</button>
    </li>`;
        parentElement.innerHTML = result;
        //when a button is pushed on the inside it will delete the items and put a text that says there is nothing in the cart//

        let amountOfItems = document.querySelector(".numlol");
        // console.log(amountOfItems);
        amountOfItems.style.display = "block";
        let itemsBought = `${quantityItems}`;
        amountOfItems.innerHTML = itemsBought;

        const deleteCart = document.querySelector(".delete");

        deleteCart.addEventListener("click", function () {
            let noItems = `<p class="insidemodal">Your cart is empty.</p>`;
            parentElement.innerHTML = noItems;
            amountOfItems.style.display = "none";
        });
    } else {
        return;
    }
});
