const btn = document.querySelector(".heart");
const text = document.querySelector(".likes-number"); 

btn.addEventListener("click", () => {
    btn.classList.toggle('added');
    if (btn.classList.contains("added")) {
        text.textContent = "";
        text.textContent += 1;
    } else {
        text.textContent -= 1;
    }
});