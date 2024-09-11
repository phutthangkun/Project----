'use strict';

const addEventOneElem = function (elem , type , callback) {
    if(elem.length > 1) {
        for(let  i = 0 ; i < elem.length ; i++) {
            elem[i].addEventListener(type,callback);
        }
    } else {
        elem.addEventListener(type,callback);
    }
}

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const togglerNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOneElem(navTogglers, "click", togglerNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOneElem(navbarLinks, "click", closeNavbar);

const header = document.querySelector("[data-header]");

const headerActive = function () {
    if(window.scrollY > 150) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

addEventOneElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
    if(lastScrolledPos >= window.scrollY) {
        header.classList.remove("header-hide");
    } else {
        header.classList.add("header-hide");
    }

    lastScrolledPos = window.scrollY
}

addEventOneElem(window, "scroll", headerSticky)

const section = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
    for (let i = 0 ; i < section.length ; i++) {
        if(section[i].getBoundingClientRect().top < window.innerHeight / 2) {
            section[i].classList.add("active");
        } else {
            section[i].classList.remove("active");
        }
    }
}

scrollReveal();

addEventOneElem(window, "scroll", scrollReveal);



