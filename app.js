totalPrice = 0;

function addToCart(elements) {
  let mainItem = elements.closest(".single-items");
  let price = mainItem.querySelector(".price").innerText;
  let title = mainItem.querySelector("h3").innerText;
  let cartItems = document.querySelector(".cart-items");
  price = Number(price.substring(1));
  console.log(price);
  cartItems.innerHTML = `Movie: ${title}, Price:${price}`;
}
