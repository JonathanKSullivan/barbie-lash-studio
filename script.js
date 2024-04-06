document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-strings', {
        strings: ["Unveil Natural Beauty^1000", "Enhance Your Confidence^1000", "Feel the Transformation^1000"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    });

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle navigation
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.contains('active');
        navLinks.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', !isOpen);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

