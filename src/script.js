
const menuButton = document.getElementById('menuButton');
const closeMenuButton = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');
const backdrop = document.getElementById('backdrop');

// Fungsi untuk membuka menu
const openMenu = () => {
    menuOverlay.classList.remove('hidden');
};

// Fungsi untuk menutup menu
const closeMenu = () => {
    menuOverlay.classList.add('hidden');
};

// Event Listener untuk tombol hamburger
menuButton.addEventListener('click', openMenu);

// Event Listener untuk tombol close
closeMenuButton.addEventListener('click', closeMenu);

// Event Listener untuk backdrop (jika diklik, tutup menu)
backdrop.addEventListener('click', closeMenu);

const carousel = document.getElementById('carousel');
const slides = carousel.children;
const totalSlides = slides.length;
let currentIndex = 0;

const updateCarousel = (index) => {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    updateIndicators(index);
};

const updateIndicators = (index) => {
    document.querySelectorAll('[data-slide]').forEach((dot, i) => {
        dot.style.backgroundColor = i === index ? '#000' : '#ccc';
    });
};

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel(currentIndex);
});

document.querySelectorAll('[data-slide]').forEach((dot) => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-slide'));
        updateCarousel(currentIndex);
    });
});

// Auto-play functionality (optional)
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel(currentIndex);
}, 5000); // 5 seconds
