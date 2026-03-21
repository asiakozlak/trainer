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

// Konfiguracja danych kontaktowych (rozbite na części)
const contactData = {
    prefix: "48",
    num1: "123",
    num2: "456",
    num3: "789",
    user: "email",
    domain: "example.com"
};

document.addEventListener("DOMContentLoaded", () => {
    const fullNumber = contactData.prefix + contactData.num1 + contactData.num2 + contactData.num3;
    const formattedNumber = `+${contactData.prefix} ${contactData.num1} ${contactData.num2} ${contactData.num3}`;
    const fullEmail = `${contactData.user}@${contactData.domain}`;

    // Uzupełnienie tekstu na stronie
    const phoneTextElem = document.getElementById("phone-text-placeholder");
    const emailElem = document.getElementById("email-placeholder");
    const whatsappBtn = document.getElementById("whatsapp-btn");

    if (phoneTextElem) phoneTextElem.innerText = formattedNumber;
    if (emailElem) emailElem.innerText = fullEmail;

    // Dynamiczne przypisanie linku do WhatsApp
    if (whatsappBtn) {
        whatsappBtn.href = `https://wa.me/${fullNumber}`;
    }
});