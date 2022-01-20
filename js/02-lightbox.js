import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");

function createGalleryCardsMarkup(items) {
  return items
    .map(
      ({ original, preview, description }) => `<div class="gallery__item">
  <a class="gallery__item" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      alt='${description}'
    />
  </a>
</div>`
    )
    .join("");
}

const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryCardsMarkup);

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
