const header = document.querySelector("header");
const navbar = document.querySelector(".navbar");
const menu = document.getElementById("menu");

// ========sticky navbar=======>
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// ==========Hemburgermenu=====>
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
