// JS scripts placed here
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;
  const menuLinks = document.querySelectorAll(".navbar a");

  menuLinks.forEach(link => {
    if (link.href.includes(currentPage)) {
      link.classList.add("active");
    }
  });
});
