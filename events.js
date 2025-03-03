/*
document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper === "undefined") {
        console.error("Swiper.js is not loaded. Make sure the Swiper script is included in your HTML.");
        return;
    }

    var swiper = new Swiper(".swiper", {
        slidesPerView: 3, // Ensure 3 cards are visible at a time
        spaceBetween: 30,
        loop: true,
        centeredSlides: false, // Ensure all 3 slides are interactive
        grabCursor: true,
        effect: "slide", // Removed coverflow effect to make all slides functional
        navigation: {
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
        },
        breakpoints: {
            640: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3, // 3 slides at larger screen widths
            },
        },
    });
    tsParticles.load("particles-js", {
    particles: { number: { value: 100 }, move: { speed: 2 } }
  });

    const prevButton = document.querySelector(".swiper-button-prev-custom");
    const nextButton = document.querySelector(".swiper-button-next-custom");

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", function () {
            swiper.slidePrev();
        });

        nextButton.addEventListener("click", function () {
            swiper.slideNext();
        });
    } else {
        console.warn("Navigation buttons not found. Make sure .swiper-button-prev-custom and .swiper-button-next-custom exist.");
    }
});*/


/*document.addEventListener("DOMContentLoaded", function () {
    tsParticles.load("particles-js", {
        particles: { 
            number: { value: 100 }, 
            move: { speed: 2 } 
        }
    });
});
 */

document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper === "undefined") {
        console.error("Swiper.js is not loaded. Make sure the Swiper script is included in your HTML.");
        return;
    }

    var swiper = new Swiper(".swiper", {
        slidesPerView: 3, // Ensure 3 cards are visible at a time
        spaceBetween: 30,
        loop: true,
        centeredSlides: false, // Ensure all 3 slides are interactive
        grabCursor: true,
        effect: "slide", // Removed coverflow effect to make all slides functional
        navigation: {
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
        },
        breakpoints: {
            640: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3, // 3 slides at larger screen widths
            },
        },
    });

    // Load Particles.js
    tsParticles.load({
        id: "tsparticles",
        options: {
          particles: {
            shape: {
              type: "square", // starting from v2, this require the square shape script
            },
          },
          preset: "links",
        },
      });

    const prevButton = document.querySelector(".swiper-button-prev-custom");
    const nextButton = document.querySelector(".swiper-button-next-custom");

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", function () {
            swiper.slidePrev();
        });

        nextButton.addEventListener("click", function () {
            swiper.slideNext();
        });
    } else {
        console.warn("Navigation buttons not found. Make sure .swiper-button-prev-custom and .swiper-button-next-custom exist.");
    }
});
