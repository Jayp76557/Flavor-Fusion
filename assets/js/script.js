
document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded");

  const preloader = document.querySelector("[data-preaload]");

  window.addEventListener("load", function () {
    setTimeout(function() {
    preloader?.classList.add("loaded");
    document.body.classList.add("loaded");
  }, 1000);
  });

  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");

  const toggleNavbar = function () {
    navbar?.classList.toggle("active");
    overlay?.classList.toggle("active");
    console.log("Navbar toggled");
    document.body.classList.toggle("nav-active");
  };

  // Event delegation for navbar togglers
  navTogglers.forEach(toggler => {
    toggler.addEventListener("click", toggleNavbar);
  });

  // ✅ Use event delegation for dynamically loaded elements
  document.addEventListener("click", function (event) {
    if (event.target.id === "hi") {
      console.log("Button clicked");
    }
  });

  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");
  let lastScrollPos = 0;

  const hideHeader = function () {
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom) {
      header?.classList.add("hide");
    } else {
      header?.classList.remove("hide");
    }
    lastScrollPos = window.scrollY;
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
      header?.classList.add("active");
      backTopBtn?.classList.add("active");
      hideHeader();
    } else {
      header?.classList.remove("active");
      backTopBtn?.classList.remove("active");
    }
  });
});