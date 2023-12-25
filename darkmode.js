
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode setting exists, otherwise default to dark mode
const isDarkMode = localStorage.getItem('darkMode') ? 
                   localStorage.getItem('darkMode') === 'enabled' : 
                   true;

// Apply dark mode if it's enabled or no setting is saved
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
    localStorage.setItem('darkMode', 'enabled'); // Save the setting
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});
