// Import modules
import { initializeHeader } from './modules/header.js';
import { initializeProjects } from './modules/projects.js';
// import { initializeContact } from './modules/contact.js';
import { initializeFooter } from './modules/footer.js';
import { initializeTheme } from './modules/theme.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    initializeHeader();
    initializeProjects();
    // initializeContact();
    initializeFooter();
    initializeTheme();
});

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const resumeLink = document.getElementById("resume-link");
const fileURL = "./Resume.pdf";

if (isMobile) {
  resumeLink.setAttribute("href", fileURL);
  resumeLink.setAttribute("target", "_blank");
  resumeLink.innerText = "View Resume";
} else {
  resumeLink.setAttribute("href", fileURL);
  resumeLink.setAttribute("download", "Resume.pdf");
}
