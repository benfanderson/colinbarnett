function init() {
    const accordion = document.getElementsByClassName("accordion-pane");
    const button = document.getElementsByTagName("button");
    for (var i = 0; i < button.length; i++) {
        // Sets accordion quotes as shut when page loads
        accordion[i].children[1].style.display = "none";
        //Attaches function to button
        button[i].onclick = toggleAccordion;
    }
}

function toggleAccordion(event) {
    const display = event.target.parentElement.children;
    // Toggles accordion quote open when button is clicked
    if (display[1].style.display == "none") {
        display[1].style.display = "block";
        display[2].innerHTML = "Hide";
    // Toggles accordion quote shut when button is clicked
    } else {
        display[1].style.display = "none";
        display[2].innerHTML = "Show";
    }
}

window.onload = init;