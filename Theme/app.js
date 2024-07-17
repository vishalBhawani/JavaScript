document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById('theme');
    const displayTheme = document.getElementById('displayTheme');
    const body = document.body;

    // Retrieve theme from localStorage, default to 'dark-theme' if not set
    let theme = localStorage.getItem('theme') || 'dark-theme';

    // Function to toggle theme
    const toggleTheme = () => {
        // Toggle between 'dark-theme' and 'light-theme'
        theme = (theme === 'dark-theme') ? 'light-theme' : 'dark-theme';

        // Update body classList and localStorage with the new theme
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
        localStorage.setItem('theme', theme);

        // Update displayTheme text
        displayTheme.innerHTML = `Current theme is ${theme}`;
    };

    // Apply initial theme and display
    body.classList.add(theme);
    displayTheme.innerHTML = `Current theme is ${theme}`;

    // Event listener for theme button click
    themeBtn.addEventListener('click', toggleTheme);
});
