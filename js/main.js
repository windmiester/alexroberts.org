const menuButton = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector(".nav-menu");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

menuButton.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});

dropdownToggles.forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    const dropdown = toggle.parentElement;
    dropdown.classList.toggle("open");
  });
});