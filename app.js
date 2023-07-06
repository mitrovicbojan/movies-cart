totalPrice = 0;

function addToCart(elements) {
  let mainItem = elements.closest(".single-items");
  let price = mainItem.querySelector(".price").innerText;
  let title = mainItem.querySelector("h3").innerText;
  let cartItems = document.querySelector(".cart-items");
  price = Number(price.substring(1));

  totalPrice += price;
  cartItems.innerHTML += `Movie: ${title}, Price:${price} <button class="remove-item" onclick="removeFromCart(this)">Remove</button> <br>`;
  document.querySelector(".total").innerText = `Total price: $${totalPrice}`;
  elements.setAttribute("disabled", "true");
}

function removeFromCart(elements) {
  console.log("remove");
}
