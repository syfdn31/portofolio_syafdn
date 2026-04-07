document.addEventListener("DOMContentLoaded", function () {

    // Typing
    if (typeof Typed !== "undefined") {
        new Typed(".typing", {
            strings: ["Web Developer", "Laravel Enthusiast", "UI Designer"],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true
        });
    }

    // AOS
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    // Particles
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: { value: 60 },
                size: { value: 3 },
                move: { speed: 2 },
                line_linked: { enable: true }
            }
        });
    }

    // Swiper
    if (typeof Swiper !== "undefined") {
        new Swiper(".swiper", {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            }
        });
    }

});
