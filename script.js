const btn = document.getElementById("openBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
    message.classList.remove("hidden");
    btn.style.display = "none";
    music.play();
});
