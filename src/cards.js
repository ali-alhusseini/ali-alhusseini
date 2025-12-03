import gsap from "gsap";

const cards = document.querySelectorAll(".card-container");

cards.forEach((card) => {
    const inner = card.querySelector(".card-inner");
    const front = card.querySelector(".card-front");
    let isFlipped = false;

    card.addEventListener('click', function() {
        isFlipped = !isFlipped;

        gsap.to(inner, {
            rotationY: isFlipped ? 180 : 0,
            duration: 0.8,
            ease: "power2.inOut"
        });

        gsap.to(front, {
            y: 0,
            scale: isFlipped ? 0.8 : 1,
            opacity: isFlipped ? 0 : 1,
            duration: 0.8,
            ease: "power2.inOut"
        })
    });
})