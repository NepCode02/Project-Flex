// Function to Show Specific Section
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    closeMenu(); // Close the menu after clicking a link
}

// Toggle Navigation Menu
function toggleMenu() {
    document.querySelector('nav ul').classList.toggle('active');
}

// Change Language Functionality
function changeLanguage() {
    const language = document.getElementById
