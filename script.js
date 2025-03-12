document.addEventListener("DOMContentLoaded", () => {
    const pagePath = window.location.pathname;

    if (pagePath.includes("index.html") || pagePath === "/") {
        console.log("Página de inicio de Makenzo Houshi cargada");
    } else if (pagePath.includes("conciertos.html")) {
        console.log("Página de conciertos de Makenzo Houshi cargada");
        setupConcertSlider();
    } else if (pagePath.includes("catalogo.html")) {
        console.log("Página de catálogo musical de Makenzo Houshi cargada");
    } else if (pagePath.includes("biografia.html")) {
        console.log("Página de biografía de Makenzo Houshi cargada");
    } else if (pagePath.includes("videos.html")) {
        console.log("Página de videoclips de Makenzo Houshi cargada");
        setupPhotoSlider();
    }
});

function setupConcertSlider() {
    let index = 0;
    const slides = document.querySelectorAll(".slider .slide");
    const slideCount = slides.length;
    const slider = document.querySelector(".slider");
    const prevButton = document.querySelector(".slider-prev");
    const nextButton = document.querySelector(".slider-next");

    function showSlide(n) {
        slides.forEach((slide, i) => {
            slide.style.display = i === n ? "block" : "none";
        });
    }

    function nextSlide() {
        index = (index + 1) % slideCount;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + slideCount) % slideCount;
        showSlide(index);
    }

    if (slideCount > 0) {
        showSlide(index);
        setInterval(nextSlide, 4000);

        prevButton.addEventListener("click", () => {
            prevSlide();
        });

        nextButton.addEventListener("click", () => {
            nextSlide();
        });
    }
}

function setupPhotoSlider() {
    let slideIndex = 1;
    showSlides(slideIndex);

    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    };

    function showSlides(n) {
        let i;
        let slides = document.querySelectorAll(".photo-slider .slide");
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
}

/*Para el formulario de contacto*/
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Obtener valores del formulario
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validar los campos
        if (name === "" || email === "" || message === "") {
            showMessage("Por favor, completa todos los campos.", "error");
            return;
        }

        if (!isValidEmail(email)) {
            showMessage("Por favor, ingresa un correo válido.", "error");
            return;
        }
        // Función para validar email
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Función para mostrar mensajes de estado
    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = type === "error" ? "form-message error" : "form-message success";
        formMessage.style.display = "block";

        setTimeout(() => {
            formMessage.style.display = "none";
        }, 3000);
    }
    });
});

// Script para el funcionamiento del slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});
