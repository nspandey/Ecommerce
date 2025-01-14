const cartItems = document.getElementById("cart-items");
const totalItems = document.getElementById("total-items");
const totalPrice = document.getElementById("total-price");
const shippingCost = document.getElementById("shipping-cost");

let cart = [
  { id: 1, name: "Shirt", description: "Cotton T-shirt", price: 44, quantity: 1, image: "shirt1.jpg" },
  { id: 2, name: "Shirt", description: "Cotton T-shirt", price: 44, quantity: 1, image: "shirt2.jpg" },
  { id: 3, name: "Shirt", description: "Cotton T-shirt", price: 44, quantity: 1, image: "shirt3.jpg" },
];

// Render Cart Items
function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  let items = 0;

  cart.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div>
        <p><strong>${product.name}</strong></p>
        <p>${product.description}</p>
      </div>
      <div class="quantity-controls">
        <button onclick="changeQuantity(${product.id}, -1)">-</button>
        <span>${product.quantity}</span>
        <button onclick="changeQuantity(${product.id}, 1)">+</button>
      </div>
      <p>€${(product.price * product.quantity).toFixed(2)}</p>
      <span class="delete-icon" onclick="removeItem(${product.id})">X</span>
    `;

    cartItems.appendChild(cartItem);
    total += product.price * product.quantity;
    items += product.quantity;
  });

  totalItems.innerText = items;
  updateTotalPrice(total);
}

// Change Quantity
function changeQuantity(productId, change) {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity += change;
    if (product.quantity <= 0) removeItem(productId);
    renderCart();
  }
}

// Remove Item
function removeItem(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}

// Update Total Price
function updateTotalPrice(subtotal) {
  const shipping = parseFloat(shippingCost.value);
  const total = subtotal + shipping;
  totalPrice.innerText = `€${total.toFixed(2)}`;
}

// Update Total Price on Shipping Change
shippingCost.addEventListener("change", () => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  updateTotalPrice(subtotal);
});

// Initialize Cart
renderCart();
