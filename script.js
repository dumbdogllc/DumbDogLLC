document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    // Toggle Mobile Menu
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        
        // Simple Hamburger Animation
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = mainNav.classList.contains('active') 
            ? 'rotate(45deg) translate(5px, 6px)' : 'none';
        spans[1].style.transform = mainNav.classList.contains('active') 
            ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
    });

    // Close menu when a link is clicked (Mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });

    // Form Submission Placeholder
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your message has been sent.');
        contactForm.reset();
    });
});