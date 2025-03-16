
document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded");


  /**
   * PRELOAD
   */

  const preloader = document.querySelector("[data-preaload]");

  window.addEventListener("load", function () {
    setTimeout(function() {
    preloader?.classList.add("loaded");
    document.body.classList.add("loaded");
  }, 1000);
  });


  /**
   * NAVBAR
   */

  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");

  const toggleNavbar = function () {
    navbar?.classList.toggle("active");
    overlay?.classList.toggle("active");
    console.log("Navbar toggled");
    document.body.classList.toggle("nav-active");
  };

  navTogglers.forEach(toggler => {
    toggler.addEventListener("click", toggleNavbar);
  });

  document.addEventListener("click", function (event) {
    if (event.target.id === "hi") {
      console.log("Button clicked");
    }
  });


  /**
   * HEADER & BACK TOP BTN
   */

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

  /**
   * HERO SLIDER
   */

  // const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active")
  lastActiveSliderItem=heroSliderItems[currentSlidePos];
  console.log(currentSlidePos)
}

const slideNext = function () {
  if(currentSlidePos<heroSliderItems.length-1){
    currentSlidePos++
  }else{
    currentSlidePos = 0
  }
  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if(currentSlidePos==0){
    currentSlidePos = heroSliderItems.length-1
  }else{
    currentSlidePos--
  }
  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

});