function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(id) {
  let cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
  renderCart();
}

function updateQuantity(id, qty) {
  let cart = getCart();
  cart = cart.map(item => {
    if (item.id === id) {
      item.quantity = qty > 0 ? qty : 1;
    }
    return item;
  });
  saveCart(cart);
  renderCart();
}

function renderCart() {
  const cart = getCart();
  const cartItemsContainer = document.getElementById("cart-items");
  const totalElem = document.getElementById("total-price");
  const countElem = document.getElementById("cart-count");

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Votre panier est vide.</p>";
    totalElem.textContent = "0";
    countElem.textContent = "0";
    return;
  }

  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    count += item.quantity;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <p><strong>${item.name}</strong> - ${item.price} €</p>
      <p>
        Quantité :
        <input type="number" min="1" value="${item.quantity}" class="cart-quantity"
          onchange="updateQuantity(${item.id}, this.value)">
        <button class="btn-remove" onclick="removeFromCart(${item.id})">❌ Supprimer</button>
      </p>
      <p>Couleur: ${item.color || "-"} | Taille: ${item.size || "-"}</p>
    `;
    cartItemsContainer.appendChild(div);
  });

  totalElem.textContent = total.toFixed(2);
  countElem.textContent = count;
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();

  const checkoutBtn = document.getElementById("checkout");
  checkoutBtn.addEventListener("click", () => {
    const cart = getCart();
    if (cart.length === 0) {
      alert("Votre panier est vide !");
      return;
    }
    alert("✅ Votre commande a été passée avec succès !");
    localStorage.removeItem("cart");
    renderCart();
  });
});