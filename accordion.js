function init() {
    const accordion = document.getElementsByClassName("accordion");
    for (var i = 0; i < accordion.length; i++) {
        // Sets accordion quotes as shut when page loads
        accordion[i].nextElementSibling.style.display = "none";
        //Attaches function to button
        accordion[i].onclick = toggleAccordion;
    }
}

function toggleAccordion(event) {
    const display = event.target.nextElementSibling;
    // Toggles accordion quote open when button is clicked
    if (display.style.display == "none") {
        display.style.display = "block";
    // Toggles accordion quote shut when button is clicked
    } else {
        display.style.display = "none";
    }
}


window.onload = init;