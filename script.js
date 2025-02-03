// shop page
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
// map
function initMap() {
    // The location of the marker (Carrer de Muntaner 184)
    const location = { lat: 41.3963, lng: 2.1519 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, 
        center: location, 
    });
    
    const marker = new google.maps.Marker({
        position: location, 
        map: map, 
        title: "Carrer de Muntaner 184" 
    });
}

function loadScript() {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA5CrbUEqgYYNYJCeUm1_8gU3jGpLB1NvI&callback=initMap";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
}

loadScript();