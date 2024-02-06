// const gallery = document.querySelector('.hero-gallery');
var acc = document.getElementsByClassName("accordion");
var i;

// // INDEX GALLERY
// gallery.addEventListener('click', e => {
//   e.preventDefault();
//   let simpleGallery = new SimpleLightbox('.hero-gallery a');
//   simpleGallery.on('show.simplelightbox', function () {
//   });
// });

// MOBILE BURGER MENU
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const toggleMenu = () => {
    const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
      
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
})();

// SERVICES ACCORDION
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}