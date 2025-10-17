let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} zł`;
        cartItems.appendChild(li);
    });
    document.getElementById("total").textContent = `Suma: ${total} zł`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Twój koszyk jest pusty!");
        return;
    }
    alert(`Dziękujemy za zakupy! Suma do zapłaty: ${total} zł`);
    cart = [];
    total = 0;
    updateCart();
}
