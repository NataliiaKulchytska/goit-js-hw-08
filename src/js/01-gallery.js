import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(SimpleLightbox);
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const image = document.querySelector('.gallery__image');


function galleryListMarkup() {
    return galleryItems.map(({ preview, original, description }) => {
 return `<li class = gallery_lists>
         <a class = gallery__item href='${original}'>
      <img
      class= 'gallery__image'
      src= '${preview}'      
      alt='${description}'
    />
  </a>
</li>`})
        .join('');
    
};

const markupFunEl = galleryListMarkup(galleryItems);
galleryList.insertAdjacentHTML('afterbegin', markupFunEl);

const optionsLibrary = {
    overlay: true,
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    enableKeyboard: true,
};
let gallery = new SimpleLightbox('.gallery a', optionsLibrary);
console.log(gallery);