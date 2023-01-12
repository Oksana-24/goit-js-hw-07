import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const gallery = document.querySelector('.gallery');
//console.dir(gallery)


const markup = galleryItems.reduce((acc, { preview, original, description }) =>
    acc + `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
    </div>`, '');

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,
        {
            onShow: instance => { document.addEventListener('keydown', onEscapeKeyDown); },
            onClose: instance => { document.addEventListener('keydown', onEscapeKeyDown); }
        });
    instance.show()
    function onEscapeKeyDown(event) {
        if (event.code !== 'Escape') {
            return
        }
        instance.close();
    }

}
