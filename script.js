// CONTACT
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});