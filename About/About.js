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

var textObserver = new IntersectionObserver(fadeInText, { threshold: 0.1 });

textSections.forEach(textSection => {
    textObserver.observe(textSection);
});
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
