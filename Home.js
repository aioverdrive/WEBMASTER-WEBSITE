document.addEventListener('DOMContentLoaded', function () {
   
    // Fade-in effect for text in sections
    var textSections = document.querySelectorAll('.section .column-left, .showcase > .image-container .text, .green-energy .text, .save-energy .text, .luxurious-living .text');

function fadeInText(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}

var textObserver = new IntersectionObserver(fadeInText, { threshold: 0.2 });

textSections.forEach(textSection => {
    textObserver.observe(textSection);
});


    // Slideshow script
    var images = document.querySelectorAll('.hero img');
    var currentIndex = 0;

    function showNextSlide() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextSlide, 3000);
});
