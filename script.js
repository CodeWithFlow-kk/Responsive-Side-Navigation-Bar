const sidePanel = document.querySelector(".side-panel");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
    sidePanel.classList.toggle("collapsed");
    const icon = navToggle.querySelector("i");

    if (sidePanel.classList.contains("collapsed")) {
        icon.classList.replace("fa-xmark", "fa-bars");
    } else {
        icon.classList.replace("fa-bars", "fa-xmark");
    }
});