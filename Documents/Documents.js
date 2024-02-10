document.addEventListener("DOMContentLoaded", function() {
    const imageLinks = document.querySelectorAll(".image-container a");
    imageLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Track click event
            console.log("Clicked on:", this.getAttribute("href"));
        });
    });
});
