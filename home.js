
window.addEventListener("DOMContentLoaded", function(e){
    var backgroundImages = document.getElementById("background-images");
    var fadeComplete = function(e) {
        backgroundImages.appendChild(images[0]); 
    };
    var images = backgroundImages.getElementsByTagName("img");
    for(var i=0; i < images.length; i++) {
        images[i].addEventListener("animationend", fadeComplete, false);
      }
}, false);
  
 
