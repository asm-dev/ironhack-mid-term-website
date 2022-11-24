const form = document.querySelector("#contact-form")

if (form !== null) {
    form.addEventListener("submit", (event) => {
        let name = document.forms["contactForm"]["name"].value;
        event.preventDefault()
        name.toLowerCase() === "ironhack" ? alert("You cannot be Ironhack, because I am Ironhack.")
        : window.location="contact_completed.html"
    })
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