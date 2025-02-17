// JS scripts placed here

// Ensure the DOM is fully loaded before executing
document.addEventListener("DOMContentLoaded", () => {
  // Highlight the active link based on the current page
  const currentPage = window.location.pathname;
  const menuLinks = document.querySelectorAll(".navbar a");

  menuLinks.forEach(link => {
    if (link.href.includes(currentPage)) {
      link.classList.add("active");
    }
  });

  // Toggle button functionality for mobile navbar
  const toggleButton = document.querySelector('.toggle-button');
  const navbarLinks = document.querySelector('.navbar ul'); // Ensure the correct navbar ul is selected

  // Check if both elements exist before adding the event listener
  if (toggleButton && navbarLinks) {
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  }
});
