document.addEventListener('DOMContentLoaded', function () {
    // Accordion script
    var accordionItems = document.querySelectorAll(".accordion");
accordionItems.forEach(function (accordionItem) {
    accordionItem.addEventListener('click', function () {
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight === '0px' || panel.style.maxHeight === '') {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            panel.classList.add('active');
        } else {
            panel.style.maxHeight = '0';
            panel.classList.remove('active');
        }
    });
});

    // Calculator script
    var calculatorOpen = false;
    var calculatorButton = document.getElementById("calculatorButton");
    var calculatorSection = document.getElementById("calculatorSection");

    calculatorButton.addEventListener('click', function () {
        calculatorSection.style.display = (calculatorOpen) ? 'none' : 'block';
        calculatorButton.textContent = (calculatorOpen) ? 'Open Calculator' : 'Close Calculator';
        calculatorOpen = !calculatorOpen;
    });

    var resetButton = document.getElementById("resetButton");
    resetButton.addEventListener('click', function () {
        document.getElementById('electricityUsage').value = "";
        document.getElementById('savingsPercentage').value = "";
        document.getElementById('results').innerHTML = "";
        window.scrollTo({
            top: calculatorSection.offsetTop,
            behavior: 'smooth'
        });
    });

    // Scroll event
    window.addEventListener('scroll', function () {
        var interactiveSection = document.querySelector(".interactive-section");
        if (window.scrollY > interactiveSection.offsetTop - window.innerHeight / 2) {
            interactiveSection.style.display = 'block';
        }
    });

    
});

// Calculator Script
function calculateResults() {
    const electricityUsage = parseFloat(document.getElementById('electricityUsage').value);
    const savingsPercentage = parseFloat(document.getElementById('savingsPercentage').value);

    if (isNaN(electricityUsage) || isNaN(savingsPercentage)) {
        alert('Please enter valid numbers.');
        return;
    }

    const savings = (electricityUsage * savingsPercentage) / 100;
    const environmentalImpact = electricityUsage - savings;
    const results = `
        <h2>Results</h2> 
        <p>Estimated Monthly Savings: ${savings.toFixed(2)} kWh</p>
        <p>Reduced Environmental Impact: ${environmentalImpact.toFixed(2)} kWh</p>
    `;

    document.getElementById('results').innerHTML = results;
}
