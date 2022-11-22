const projectsSection = document.querySelector('.projects-section')

// let projectCard = document.createElement("div")
// projectCard.classList("project-card")
// projectCard.innerHTML = projectHTML(data,3)

window.addEventListener("load", () => {
    
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
    .then((response) => response.json())
    .then((data) => {

        for (i=3; i>0; i--) {
            let project = data[i]
            let projectCard = document.createElement("div");
            projectCard.classList.add("project-card")
            projectCard.innerHTML = `
                <div class="card-img">
                </div>
                <div>
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                </div>
                <a href="#">Learn more</a>`
            let projectImage = projectCard.querySelector(".card-img")
            projectImage.style.backgroundImage = "url('"+project.image+"')"
            projectsSection.appendChild(projectCard)
        }

    })
    .catch(console.error);
    
})
