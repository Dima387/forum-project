const btn = document.querySelector(".theme-button");
const body = document.querySelector("body");
const container = document.querySelector(".container");
btn.addEventListener("click", changeTheme);

function changeTheme() {
    if (body.classList.contains("light-theme")) {
        body.classList.toggle("light-theme");
        body.classList.toggle("dark-theme");

        container.classList.toggle("light-theme");
        container.classList.toggle("dark-theme");

        btn.textContent = "Light theme";
    } else {
        container.classList.toggle("light-theme");
        container.classList.toggle("dark-theme");

        body.classList.toggle("light-theme");
        body.classList.toggle("dark-theme");

        btn.textContent = "Dark theme";
    }
}