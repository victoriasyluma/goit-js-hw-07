import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

let listElement = '';
galleryItems.forEach((item) => {
  const newImage = `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
     <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
 </li>`;

  listElement += newImage;
});

gallery.insertAdjacentHTML('afterbegin', listElement);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
