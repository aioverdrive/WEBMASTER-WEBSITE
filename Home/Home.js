document.addEventListener('DOMContentLoaded', function () {
     // Slideshow script
    var images = document.querySelectorAll('.hero img');
    var currentIndex = 0;

    function showNextSlide() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextSlide, 2500);
    // Text animation
    var elements = document.querySelectorAll('.hidden.animated');
    elements.forEach(function(el) {
        el.classList.remove('hidden');
        var spans = el.querySelectorAll('span');
        spans.forEach(function(span, index) {
            var animations = ['slideInTopLeft', 'slideInTopRight', 'slideInBottomLeft', 'slideInBottomRight'];
            var randomAnimation = animations[Math.floor(Math.random() * animations.length)];
            span.style.animation = `${randomAnimation} .2s ease-in-out forwards`;
        });
    });
    
});

