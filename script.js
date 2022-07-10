const backdrop = document.querySelector(".backdrop");
const mobileMenu = document.querySelector(".header-nav");
const openMenuBtn = document.querySelector('ion-icon[name="menu-outline"]');
const closeMenuBtn = document.querySelector('ion-icon[name="close-outline"]');

openMenuBtn.addEventListener("click", () => {
  backdrop.style.display = "block";
  mobileMenu.classList.add("mobile-menu-visible");
});

closeMenuBtn.addEventListener("click", () => {
  backdrop.style.display = "none";
  mobileMenu.classList.remove("mobile-menu-visible");
});
