'use strict';
const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  setTimeout(function() {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
}, 2000);
});