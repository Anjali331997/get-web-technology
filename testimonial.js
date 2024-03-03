var currentIndex = 0;
leftSlide()
function leftSlide() {
    var test = document.getElementsByClassName("testimonial-div");
   
    for (let i = 0; i < test.length; i++) {
        test[i].style.display = "none"
    }

    for (let i = currentIndex; i < currentIndex + 4; i++) {
        test[i].style.display = "flex"
    }

    currentIndex += 4;
    if (currentIndex >= test.length || currentIndex <= 0) {
        currentIndex = 0;
    }
}

function rightSlide() {
    var test = document.getElementsByClassName("testimonial-div");
    
    for (let i = 0; i < test.length; i++) {
        test[i].style.display = "none"
    }

    for (let i = currentIndex; i < currentIndex + 4; i++) {
        test[i].style.display = "flex"
    }

    currentIndex = currentIndex- 4;
    if (currentIndex <= 0 || currentIndex >= test.length ) {
        currentIndex = 0;
    }
}