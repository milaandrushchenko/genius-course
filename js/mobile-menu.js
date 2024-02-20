const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-burger-btn-open");
const menuBtnClose = document.querySelector(".menu-burger-btn-close");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");
// const toggleMenu = () => console.log("is-open");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);
