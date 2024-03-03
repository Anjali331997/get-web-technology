let currIndex = 0;

function nextSlide() {
    let slides = document.getElementsByClassName("slide-image");
    currIndex++;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (let i = currIndex; i < slides.length; i++) {
        slides[i].style.display = "block"
    }

    if(currIndex+3 >= slides.length){
        currIndex=0;
    }
}