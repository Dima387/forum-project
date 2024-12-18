const btn = document.querySelector(".up-button");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        btn.classList.add("shown");
    } else if (window.pageYOffset <= 200) {
        btn.classList.remove("shown");
    }
})

btn.addEventListener("click", () => {
    scrollTo(0, 0);
})