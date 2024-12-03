export function initializeFooter() {
    // Update copyright year
    const yearElement = document.getElementById('current-year');
    yearElement.textContent = new Date().getFullYear();
}