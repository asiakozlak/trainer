const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    // Przełączamy klasę open na liście ul
    navLinks.classList.toggle("open");
    // Animujemy hamburgera w krzyżyk
    hamburger.classList.toggle("toggle");
    
    // Blokada scrolla
    if (navLinks.classList.contains("open")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "initial";
    }
});

// Zamykanie menu po kliknięciu w link (ważne!)
document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.classList.remove("toggle");
        document.body.style.overflow = "initial";
    });
});

// Intersection Observer (do pojawiania się elementów)
const revealElements = document.querySelectorAll(".reveal-hidden");
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));