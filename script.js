document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Makenzo Houshi cargada");

    // Slider
    let index = 0;
    const slides = document.querySelectorAll(".slide");
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
        setInterval(nextSlide, 4000); // Cambia el slide cada 4 segundos

        prevButton.addEventListener("click", () => {
            prevSlide();
        });

        nextButton.addEventListener("click", () => {
            nextSlide();
        });
    }
});