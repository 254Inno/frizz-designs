"use strict";
const navigationToggle = document.querySelector(".header__nav--menu");
const navFull = document.querySelector(".header__nav-full");
const iconsToggle = document.querySelectorAll(".icon-nav");
const navLinks = document.querySelectorAll(".header__nav--link");

//Navigation

navigationToggle.addEventListener("click", function () {
  navFull.classList.toggle("openNav");
  iconsToggle.forEach((icon) => icon.classList.toggle("icon-visible"));
  navLinks.forEach((link) => link.classList.toggle("hide-nav-links"));
});
