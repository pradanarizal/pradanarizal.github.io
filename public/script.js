// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  //   kalo saat window di scroll nilainya lebih besar dari fixed nav yaitu 0 maka tambah kelas
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
// seleksi target
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
// kasih event ketika di klik tambahi kelas...
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
