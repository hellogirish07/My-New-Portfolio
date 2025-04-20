const projects = [
    {
        title: "BG Remover App",
        description: "A web bassed free image background remover tool with image download deature",
        image: "/image/BG-remover.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://girish18-bg-remover.netlify.app/"
    },
    {
        title: "Notes App",
        description: "A webapp for storing notes on the browser for future use",
        image: "/image/notes.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://girish18-note-app.netlify.app/"
    },
    {
        title: "Redmi 12 : Landing Page",
        description: "A landing page for a smartphone : Redmi 12 5G ",
        image: "/image/redmi-12.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://girish-18-redmi-12-5g.netlify.app/"
    }
];

export function initializeProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
    <div class="project-image-container" data-aos="fade-up">
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link" target="_blank">
                View Project →
            </a>
        </div>
    </div>
    `;
    
    return card;
}
