// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup();

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`;
    })
    .join("");
}

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

const lightBox = new SimpleLightbox(".gallery a");

lightBox.defaultOptions.captionDelay = 250;
