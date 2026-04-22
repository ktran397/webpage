// Highlight current page in nav
const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Smooth fade-in animation
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;

    setTimeout(() => {
        document.body.style.transition = "opacity 0.6s ease-in";
        document.body.style.opacity = 1;
    }, 100);
});

// Populate About Me facts
const facts = [
    "Based in Calgary, Alberta, Canada",
    "Interested in GIS and spatial analysis",
    "Enjoy working with geospatial data",
    "Experience in laboratory testing"
];

const factsList = document.getElementById("factsList");
if (factsList) {
    facts.forEach((fact) => {
        const li = document.createElement("li");
        li.textContent = fact;
        factsList.appendChild(li);
    });
}

// Dark mode toggle
const toggleBtn = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
}

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
}
