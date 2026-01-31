let cart = [];

function addToCart() {
  cart.push({ name: "Classic T-Shirt", price: 25 });
  alert("Added to cart!");
}

const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

if (cartItems) {
  let sum = 0;
  cart.forEach(item => {
    cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    sum += item.price;
  });
  total.textContent = sum;
}
