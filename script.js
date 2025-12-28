document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved user preference, if any, on load of the website
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeToggleBtn.innerText = '🌙 Dark Mode';
    } else {
        themeToggleBtn.innerText = '☀️ Light Mode';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-theme');

        // Update button text and save preference
        if (body.classList.contains('light-theme')) {
            themeToggleBtn.innerText = '🌙 Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggleBtn.innerText = '☀️ Light Mode';
            localStorage.setItem('theme', 'dark');
        }
    });

});
