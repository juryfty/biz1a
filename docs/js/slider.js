const images = [
    'url("gfx/b.webp")',
    'url("gfx/a.webp")',
    'url("gfx/c.webp")'
    // Dodaj więcej URL-i obrazów według potrzeb
];

let currentIndex = 0;
const slider = document.getElementById('background-slider');

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    slider.style.backgroundImage = images[currentIndex];
}

setInterval(changeBackground, 10000); // 10000 ms = 10 sekund

// Inicjalizacja z pierwszym obrazkiem
slider.style.backgroundImage = images[currentIndex];