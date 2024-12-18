const cookie = document.querySelector(".cookies-agreement");
const cookiesButton = document.querySelector(".cookies-button");

cookiesButton.addEventListener("click", () => {
    cookie.classList.add("cookies-agreement-closed");
    
    const overlay = document.querySelector(".overlay");
    if (overlay) {
        overlay.remove();   
    }
})

let overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);
