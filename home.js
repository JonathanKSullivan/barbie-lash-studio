document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-strings', {
        strings: ["Unveil Natural Beauty^1000", "Enhance Your Confidence^1000", "Feel the Transformation^1000"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    });


    let currentIndex = 0;
    const items = document.querySelectorAll('.testimonial-item');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');

    function showTestimonial(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
        items[index].classList.add('active');
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        showTestimonial(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        showTestimonial(currentIndex);
    });

    showTestimonial(currentIndex); // Initialize the first item

    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

            // Optional: Toggle the "active" class for styling purposes
            question.classList.toggle('active');
        });
    });


});



function openService(evt, serviceName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(serviceName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Call openService on the first tab to display it by default
document.addEventListener('DOMContentLoaded', () => openService(event, 'LashExtensions'));
