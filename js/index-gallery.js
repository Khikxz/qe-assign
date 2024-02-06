const gallery = document.querySelector('.hero-gallery');

// INDEX GALLERY
gallery.addEventListener('click', e => {
  e.preventDefault();
  let simpleGallery = new SimpleLightbox('.hero-gallery a');
  simpleGallery.on('show.simplelightbox', function () {
  });
});
