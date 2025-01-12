
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
let startX = 0;
let isSwiping = false;

// Update carousel position
const updateCarousel = (index) => {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    updateIndicators(index);
};

// Update indicator styles
const updateIndicators = (index) => {
    document.querySelectorAll('[data-slide]').forEach((dot, i) => {
        dot.classList.toggle('bg-gray-800', i === index);
        dot.classList.toggle('bg-gray-400', i !== index);
    });
};

// Handle touch events for swipe
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
});

carousel.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    const diff = e.touches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
        currentIndex = diff > 0
            ? (currentIndex - 1 + totalSlides) % totalSlides
            : (currentIndex + 1) % totalSlides;
        updateCarousel(currentIndex);
        isSwiping = false; // Prevent multiple swipes
    }
});

carousel.addEventListener('touchend', () => {
    isSwiping = false;
});

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel(currentIndex);
    } else if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel(currentIndex);
    }
});

// Previous button
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel(currentIndex);
});

// Next button
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel(currentIndex);
});

// Indicator click
document.querySelectorAll('[data-slide]').forEach((dot) => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-slide'));
        updateCarousel(currentIndex);
    });
});

// Auto-play (optional)
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel(currentIndex);
}, 5000); // Change slide every 5 seconds
