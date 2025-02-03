
let cart = [];

function addToCart(wigName, price) {
    const item = {
        name: wigName,
        price: price
    };
    
    cart.push(item);
    
    updateCartCount();
    
    alert(`${wigName} has been added to your cart!`);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        const wigItem = this.parentElement;
        const wigName = wigItem.querySelector('h3').textContent;
        const price = parseFloat(wigItem.querySelector('p').textContent.replace('$', ''));

        addToCart(wigName, price);
    });
});

// contact Page
function handleFormSubmit(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message}`);

    document.querySelector('form').reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
});