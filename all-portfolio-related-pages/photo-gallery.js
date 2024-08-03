//code for the functional lightbox
const allImages = document.querySelectorAll("[data-index]");
var lightbox = document.querySelector(".lightbox");
var currentImage = document.getElementById("currentImage");
var lightboxOn = 0;
var imageIndex = 0;

function closeLightbox(){
    lightboxOn = 0;
    lightbox.classList.remove('show');
    lightbox.classList.add('hide');
    // lightbox.style.display = "none";
    document.body.style.overflow = "auto";
}

function plusImages(n){
    openImage(imageIndex += n);
}

function openImage(n){
    document.body.style.overflow = "hidden"; /*disables scroll */
    imageIndex = n;
    if (lightboxOn == 0){
        // lightbox.style.display = "flex";
        lightbox.classList.remove('hide');
        lightbox.classList.add('show');
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

//subtle scroll animation that allows elements to fade in
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); 

// diables right click on the entire html page
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});