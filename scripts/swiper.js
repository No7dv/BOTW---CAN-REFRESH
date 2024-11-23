document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-container', {
        speed: 800,
        effect: 'slide',
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        freeModeMomentumRatio: 0.2, // Réduit la sensibilité (par défaut, c'est 1)
        freeModeMomentumVelocityRatio: 0.2, // Pour ralentir davantage
            mousewheel: {
                forceToAxis: true, // Permet de prioriser un axe (horizontal ici)
                releaseOnEdges: true, // Evite les blocages en fin de carousel
                speed: 800,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            keyboard: {
                enabled: true,
            },
            mousewheel: {
                sensitivity: 1,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
            },
        });
});
