let cart = [];
let total = 0;

/**
 * Adds a product to the cart and updates the display
 */
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateDisplay();
}

/**
 * Updates the HTML to show current cart items and total
 */
function updateDisplay() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    const countDisplay = document.getElementById('cart-count');

    // Clear the current list
    cartList.innerHTML = "";

    // Add each item to the list
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });

    // Update numbers
    totalDisplay.innerText = total;
    countDisplay.innerText = cart.length;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your order! Total: $" + total);
        cart = [];
        total = 0;
        updateDisplay();
    }
}
