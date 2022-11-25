const projectSection = document.querySelector('.project-section')
const projectsSection = document.querySelector('.projects-section')

function makeProjectCard(project) {
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card")
    projectCard.innerHTML = `
        <div class="card-img"></div>
        <div>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        </div>
        <a href="../html/project.html?project=${project.uuid}">Learn more</a>`
    let projectImage = projectCard.querySelector(".card-img")
    projectImage.style.backgroundImage = "url('"+project.image+"')"
    projectsSection.appendChild(projectCard)
}

function makeMainProject(mainProject) {
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

function buildProjectPage(mainProjectID, data) {
    const mainProject = data.filter(project => parseInt(project.uuid) === mainProjectID)[0];
    makeMainProject(mainProject)
    const remainingProjectsArr = data.filter(project => parseInt(project.uuid) !== mainProjectID)
    remainingProjectsArr.reverse().forEach((project) => {
        makeProjectCard (project)
    });
}

function getProjectID() {
    let getParams = new URLSearchParams(window.location.search).get("project",10);
    return getParams === null ? 0 : parseInt(getParams);
}

window.addEventListener("load", () => {
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
    .then((response) => response.json())
    .then((data) => {
        //Projects page
        if (projectSection !== null) {
            const queryId = getProjectID()
            //No particular product
            if (queryId === 0) {
                const randomUuid = Math.floor(Math.random() * 4);
                buildProjectPage(randomUuid, data)
            //Particular product page 
            } else {
                buildProjectPage(queryId, data)
            }
        // Homepage projects section
        } else {
            for (i=3; i>0; i--) {
                let project = data[i]
                makeProjectCard (project)
            }
        }
    })
    .catch(console.error);
})
