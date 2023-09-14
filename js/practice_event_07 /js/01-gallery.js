import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML("beforeend", markUp(galleryItems));
gallery.addEventListener('click', onClick)

function onClick(e){
    e.preventDefault()

    if(!e.target.classList.contains('gallery__image')){
        return
    };
   
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}"/>
    `)
    
    instance.show();

    onEscClose(instance);
};

function markUp(arr){
    return arr.map(({preview, original, description}) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </div>`
    ).join('')
};

function onEscClose(instance){
    const lisener = (e)=>{
        if(instance.visible()){
            if(e.code !== 'Escape'){
                return
            };

        instance.close();
        };
    };
    
    document.addEventListener('keydown', lisener);
};

