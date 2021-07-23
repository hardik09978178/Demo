const menuBtn = document.querySelector(".menu-btn");
let navbar = document.querySelector('.navbar');
let navList = document.querySelector('.nav-list');
let rightNav = document.querySelector('.right-part');
let menuOpen = false;
menuBtn.addEventListener("click", () => {

    if (!menuOpen) {
        menuBtn.classList.add("open");
        navbar.classList.toggle("h-nav-resp");
        navList.classList.toggle("visibility-resp");
        rightNav.classList.toggle("visibility-resp");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        navbar.classList.toggle("h-nav-resp");
        navList.classList.toggle("visibility-resp");
        rightNav.classList.toggle("visibility-resp");
        menuOpen = false;
    }
});