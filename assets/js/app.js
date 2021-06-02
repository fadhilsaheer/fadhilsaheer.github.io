
// display projects

const projects = portfolioData.projects;

const portfolioProjectContainer = document.querySelector(".portfolio-projects");

projects.map(project => {
    let title = project.title.split(" ");

    portfolioProjectContainer.innerHTML += `
        <a href="${project.link}">
            <div>
                <h2>
                    ${title[0]}<br>
                    ${title[1]}
                </h2>
                <p>${project.description}</p>
                <i class="fab fa-github"></i>
            </div>
        </a>
    `
});
