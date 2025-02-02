// Toggle button functionality
const toggleButton = document.getElementById('toggle-button');
const navbar = document.getElementById('navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('show'); // Toggle the visibility of the navbar
});

// Function to handle the visibility of the home section
const homeSection = document.querySelector('.home-section');
const name = document.querySelector('.name');
const title = document.querySelector('.title');
const aboutHeading = document.querySelector('.about-heading');
const aboutMeText = document.querySelector('.about-me');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            homeSection.classList.add('show'); // Show the home section
            name.style.opacity = 1; // Fade in the name
            title.style.opacity = 1; // Fade in the title
            aboutHeading.style.opacity = 1; // Fade in the about heading
            aboutMeText.classList.add('show'); // Fade in the about me text
        }
    });
});

// Observe the home section
observer.observe(homeSection);