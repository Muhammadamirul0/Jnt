// Menu Hamburger
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


