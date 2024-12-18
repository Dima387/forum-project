const iconMenu = document.querySelector(".menu-btn");
const list = document.querySelector(".list");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const btn = document.querySelector(".menu-button");

btn.addEventListener("click", addMenu);

function addMenu() {
    if(list.classList.contains("active")) {
        list.classList.remove("active");
        iconMenu.src = "./img/menu.png";
        nav.style.height = "auto";
        header.style.alignItems = "center";
        iconMenu.classList.remove("close");
    } else {
        list.classList.add("active");
        iconMenu.src = "./img/cross.png";
        nav.style.height = "100 vh";
        iconMenu.classList.add("close");

    }
}