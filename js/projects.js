const projectSection = document.querySelector('.project-section')
const projectsSection = document.querySelector('.projects-section')


window.addEventListener("load", () => {
    
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
    .then((response) => response.json())
    .then((data) => {

        if (projectSection !== null) {
            
            let mainProject = data.filter(project => project.uuid === "1")[0];
            let projectDetails = document.createElement("div");
            projectDetails.innerHTML = `
                <h1>${mainProject.name}</h1>
                <div class="main-project-details">
                    <span>${mainProject.description}</span>
                    <span><b>Completed on </b>${mainProject.completed_on}</span>
                </div>
                <div class="project-preview-img"></div>
                <p>${mainProject.content}</p>`
            let mainImage = projectDetails.querySelector(".project-preview-img")
            mainImage.style.backgroundImage = "url('"+mainProject.image+"')"
            projectDetails.style.display = "block";
            projectDetails.style.padding = "0"
            projectSection.appendChild(projectDetails)
        }
        
        for (i=2; i>-1; i--) {
            let project = data[i]
            let projectCard = document.createElement("div");
            projectCard.classList.add("project-card")
            projectCard.innerHTML = `
                <div class="card-img"></div>
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
