const button = document.querySelector(".toggle_btn");
const navbar = document.querySelector(".nav_links_container");
const icon = button.querySelector("i");

button.addEventListener("click", () => {
  navbar.classList.toggle("active");
  icon.classList.toggle("bi-list");
  icon.classList.toggle("bi-x");
});
