import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const mainGalleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);

function createGallery(image) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}
mainGalleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

mainGalleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery__link", {
    captionSelector: "img",
    captionsData: "alt",
    captionDelay: 250,
    enableKeyboard: true,
  });
});
