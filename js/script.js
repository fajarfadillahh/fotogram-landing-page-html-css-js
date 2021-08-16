// SHOW HEADER SECTION
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("nav-menu", "nav-toggle");

// LINK ACTIVE
const navLink = document.querySelectorAll(".nav__link");
function linkActive() {
  navLink.forEach((e) => e.classList.remove("active"));
  this.classList.add("active");
}
navLink.forEach((e) => e.addEventListener("click", linkActive));

// SWIPER JS HOME SECTION
let galleryTop = new Swiper(".gallery-top", {
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".home__button-prev",
    prevEl: ".home__button-next",
  },
});
