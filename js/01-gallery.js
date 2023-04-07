import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const mainGalleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);
// console.log(createGallery(galleryItems));

mainGalleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);
function createGallery(image) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

mainGalleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
      <img class="gallery__image" src="${event.target.dataset.source}">
  `);

  instance.show();
  const onClose = (event) => {
    if (event.code === "Escape") {
      document.removeEventListener("keydown", onClose);
      instance.close();
      console.log("esc");
    }
  };
  document.addEventListener("keydown", onClose);
});
