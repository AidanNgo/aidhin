const allImages = document.querySelectorAll("[data-index]");
var lightbox = document.querySelector(".lightbox");
var currentImage = document.getElementById("currentImage");
var lightboxOn = 0;
var imageIndex = 0;

function closeLightbox(){
    lightboxOn = 0;
    lightbox.style.display = "none";
}

function plusImages(n){
    openImage(imageIndex += n);
}

function openImage(n){
    imageIndex = n;
    if (lightboxOn == 0){
        lightbox.style.display = "flex";
        lightboxOn = 1;
    }
    if (n >= allImages.length){
        imageIndex = 0;
    }
    if (n < 0){
        imageIndex = allImages.length - 1;
    }
    currentImage.src = allImages[imageIndex].src;
}

allImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        openImage(index);
    });
});