// logic.js - Interactive Controls for Silv Matcha Web App

document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear().toString();
    }

    // WhatsApp Form Submission Handler
    const contactForm = document.querySelector("#KONTAK form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const nama = document.getElementById("NAMA") ? document.getElementById("NAMA").value.trim() : "";
            const pesan = document.getElementById("PESAN") ? document.getElementById("PESAN").value.trim() : "";
            
            const phoneNumber = "6281360514757";
            
            const text = `Halo Silv Matcha, saya *${nama}*.\n\n_Pesan:_\n${pesan}`;
            const encodedText = encodeURIComponent(text);
            
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
            window.open(whatsappUrl, "_blank");
        });
    }
});

