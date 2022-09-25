let productsInCart = JSON.parse(localStorage.getItem("ShoppingCart"));
if (!productsInCart) {
    productsInCart = [];
}
const parentElement = document.querySelector("#buyItems");
const products = document.querySelectorAll(".product-under");
const cartSumPrice = document.querySelectorAll("#sum-prices");

const countTheSumPrice = function () {
    let sumPrice = 0;
    productsInCart.forEach((product) => {
        sumPrice += product.price;
    });
    return sumPrice;
};

const updateShoppingCartHTML = function () {
    localStorage.setItem("ShoppingCart", JSON.stringify(productsInCart));
    if (productsInCart.length > 0) {
        let result = productsInCart.map((product) => {
            return `
            <li class="buyItem">
        <img src ='${product.image}'>
        <div>
          <h5>${product.name}</h5>
          <h6>${product.price}</h6>
          <div>
            <button class="button-minus" data-id = "${product.id}">-</button>
            <span class="countOfProduct">${product.count}</span>
            <button class="button-plus" data-id="${product.image}">+</button>
          </div>
        </div>
      </li>
      `;
        });
        parentElement.innerHTML = result.join(" ");
        document.querySelector(".checkout").classList.remove("hidden");
        cartSumPrice.innerHTML = "$" + countTheSumPrice();
    } else {
        document.querySelector(".checkout").classList.add("hidden");
        parentElement.innerHTML = "This is empty";
        cartSumPrice.innerHTML = "";
    }
};

function updateProductsInCart(product) {
    for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].id == product.id) {
            productsInCart[i].count += 1;
            productsInCart[i].price =
                productsInCart[i].basePrice * productsInCart[i].count;
            return;
        }
    }
    productsInCart.push(product);
}

products.forEach((product) => {
    product.addEventListener("click", (e) => {
        if (e.target.classList.contains("addTocart")) {
            const prodcutID = e.target.dataset.productId;
            const productName = product.querySelector(".productName").innerHTML;
            const productPrice =
                product.querySelector("productValue").innerHTML;
            const productImage = product.querySelector("img").src;
            let productToCart = {
                name: productName,
                image: productImage,
                id: prodcutID,
                count: 1,
                price: +productPrice,
                basePrice: +productPrice,
            };
            updateProductsInCart(productToCart);
            updateShoppingCartHTML();
        }
    });
});

parentElement.addEventListener("click", (e) => {
    const isPlusButton = e.target.classList.contains("buttons-plus");
    const isMinusButton = e.target.classList.contains("buttons-minus");
    if (isPlusButton || isMinusButton) {
        for (let i = 0; i < productsInCart.length; i++) {
            if (productsInCart[i].id === e.target.dataset.id) {
                if (isPlusButton) {
                    productsInCart[i].count += 1;
                } else if (isMinusButton) {
                    productsInCart[i].count -= 1;
                }
                productsInCart[i].price =
                    productsInCart[i].basePrice * productsInCart[i].count;
            }
            if (productsInCart[i].count <= 0) {
                productsInCart.splice(i, 1);
            }
        }
        updateShoppingCartHTML();
    }
});

updateShoppingCartHTML();
