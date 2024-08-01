var smallMenu = document.querySelector(".overall-small-menu");


function openMenu(){
    // smallMenu.style.display = "flex";
    smallMenu.classList.remove('hide');
    smallMenu.classList.add('show');
    document.body.style.overflow = "hidden";
}

function closeSmallMenu(){
    // smallMenu.style.display = "none";
    smallMenu.classList.remove('show');
    smallMenu.classList.add('hide');
    document.body.style.overflow = "auto";
}