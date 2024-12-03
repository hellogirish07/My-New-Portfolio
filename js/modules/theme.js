const themes = {
    light: {
        icon: '☀️',
        label: 'Light'
    },
    dark: {
        icon: '🌙',
        label: 'Dark'
    },
    sunset: {
        icon: '🌅',
        label: 'Sunset'
    },
    ocean: {
        icon: '🌊',
        label: 'Ocean'
    }
};

export function initializeTheme() {
    // Create theme toggle button
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    
    // Create current theme button
    const currentTheme = document.createElement('button');
    currentTheme.className = 'current-theme';
    
    // Create theme options container
    const themeOptions = document.createElement('div');
    themeOptions.className = 'theme-options';
    
    // Add theme options
    Object.entries(themes).forEach(([name, { icon, label }]) => {
        const themeBtn = document.createElement('button');
        themeBtn.className = 'theme-btn';
        themeBtn.innerHTML = `${icon} ${label}`;
        themeBtn.addEventListener('click', () => {
            setTheme(name);
            updateCurrentTheme(name);
            themeOptions.classList.remove('active');
        });
        themeOptions.appendChild(themeBtn);
    });
    
    // Initialize with saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    updateCurrentTheme(savedTheme);
    
    // Toggle theme options
    currentTheme.addEventListener('click', () => {
        themeOptions.classList.toggle('active');
    });
    
    // Close theme options when clicking outside
    document.addEventListener('click', (e) => {
        if (!themeToggle.contains(e.target)) {
            themeOptions.classList.remove('active');
        }
    });
    
    // Add elements to DOM
    themeToggle.appendChild(currentTheme);
    themeToggle.appendChild(themeOptions);
    document.body.appendChild(themeToggle);
    
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    
    function updateCurrentTheme(theme) {
        currentTheme.innerHTML = `${themes[theme].icon} ${themes[theme].label}`;
    }
}