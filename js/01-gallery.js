import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

let listElement = '';
galleryItems.forEach((item) => {
  const newImage = `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img 
    class="gallery__image" src="${item.preview}" 
    data-source="${item.original}"
    alt="${item.description}" />
  </a>
</li>`;

  listElement += newImage;
});

gallery.insertAdjacentHTML('afterbegin', listElement);

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      instance.close();
    }
  });

  instance.show();
});
