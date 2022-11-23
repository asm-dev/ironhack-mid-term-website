function validateContactForm() {
    let name = document.forms["contactForm"]["name"].value;
    if (name.toLowerCase() === "ironhack") {
        alert("You cannot be Ironhack, because I am Ironhack.")
        return false
    }
}

function displayMenu() {
    let menu = document.querySelector('.nav-bar-links')
    if (menu.classList.contains("hidden")) {
        menu.style.display = "block"
        menu.style.position = "absolute"
        menu.classList.toggle("hidden")
    } else {
        menu.style.display = "none"
        menu.classList.toggle("hidden")
    }
}