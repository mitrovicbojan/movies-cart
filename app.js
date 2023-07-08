totalPrice = 0;

function addToCart(elements) {
  let mainItem = elements.closest(".single-items");
  let price = mainItem.querySelector(".price").innerText;
  let title = mainItem.querySelector("h3").innerText;
  let cartItems = document.querySelector(".cart-items");
  price = Number(price.substring(1));

  totalPrice += price;
  cartItems.innerHTML += `<div class="cart-item">Movie: ${title}, <p>Price:<span>${price}</span></p> <button class="remove-item" onclick="removeFromCart(this)">Remove</button></div>`;
  document.querySelector(".total").innerText = `Total price: $${totalPrice}`;
  elements.setAttribute("disabled", "true");
}

function removeFromCart(elements) {
  let mainItem = elements.closest(".cart-item");
  let price = mainItem.querySelector("p span").innerText;
  console.log(price);
  totalPrice -= parseInt(price);
  mainItem.remove();
  document.querySelector(".total").innerText = `Total price: ${totalPrice}`;
}
