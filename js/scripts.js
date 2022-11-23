function validateContactForm() {
    let name = document.forms["contactForm"]["name"].value;
    if (name.toLowerCase() === "ironhack") {
        alert("You cannot be Ironhack, because I am Ironhack.")
        return false
    }
}