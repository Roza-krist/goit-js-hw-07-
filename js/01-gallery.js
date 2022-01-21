import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");

const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryCardsMarkup);

function createGalleryCardsMarkup(items) {
  return items
    .map(
      ({ original, preview, description }) => `<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>`
    )
    .join("");
}

galleryContainer.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(ev) {
  ev.preventDefault();

  if (!ev.target.classList.contains("gallery__image")) {
    return;
  }
  const modalMarkup = `<img src="${ev.target.dataset.source}" alt="${ev.target.alt}">`;
  const instance = basicLightbox.create(modalMarkup);

  instance.show();
  onClose: (instance) => {
    instance.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        instance.close();
      }
    });
  };
}
