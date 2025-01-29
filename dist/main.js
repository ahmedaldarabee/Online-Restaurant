"use strict";
let menu = document.querySelector(".menu");
let menuUl = document.querySelector(".menu ul");
let menuIcon = document.querySelector(".menuIcon");
let header = document.querySelector(".header");
let closeBtn = document.querySelector(".closeBtn");
let reservationOrder = document.querySelector(".reservation-order");
let headOrderButton = document.querySelector(".head-order-button");
let movementButton = document.querySelector(".movement-button");
menuIcon.addEventListener("click", () => {
    menuUl.classList.toggle('showMenu');
    if (menuUl.classList.contains("showMenu")) {
        menu.style.backgroundColor = '#222';
    }
    else {
        menu.style.backgroundColor = 'transparent';
    }
});
window.onscroll = () => {
    if (window.scrollY >= 500) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
    if (window.scrollY >= 600) {
        movementButton.classList.add('showArrow');
    }
    else {
        movementButton.classList.remove('showArrow');
    }
};
closeBtn.addEventListener("click", () => {
    reservationOrder.classList.toggle("active-page");
});
movementButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
headOrderButton.addEventListener("click", (event) => {
    event.preventDefault();
    reservationOrder.classList.add("active-page");
});
//# sourceMappingURL=main.js.map