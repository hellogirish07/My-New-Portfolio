// Import modules
import { initializeHeader } from './modules/header.js';
import { initializeProjects } from './modules/projects.js';
import { initializeContact } from './modules/contact.js';
import { initializeFooter } from './modules/footer.js';
import { initializeTheme } from './modules/theme.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    initializeHeader();
    initializeProjects();
    initializeContact();
    initializeFooter();
    initializeTheme();
});