const btn = document.querySelector(".theme-button");
const container = document.querySelector(".container");
const aboutUs = document.querySelector(".about-us");

btn.addEventListener("click", changeTheme);

function changeTheme() {
    if (container.classList.contains("light-theme")) {
        container.classList.toggle("light-theme");
        container.classList.toggle("dark-theme");
        aboutUs.style.backgroundColor = "#fff";
        btn.textContent = "Dark theme";
    } else {
        container.classList.toggle("light-theme");
        container.classList.toggle("dark-theme");
        aboutUs.style.backgroundColor = "#264E2C";
        btn.textContent = "Light theme";
    }
}