var imageArr = ["./assets/sliderimages/slide1.png", "./assets/sliderimages/slide2.png", "./assets/sliderimages/slide3.png"]
let currentSlide;


let slideIndex = 0;
showSlides();
let id;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideimage");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slides.length) { slideIndex = 1 }
  //   console.log(slideIndex);
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);

}

function prevImage() {
  let i;
  let slides = document.getElementsByClassName("slideimage");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex--;
  if (slideIndex < 1) { slideIndex = slides.length }
  // console.log(slideIndex);
  slides[slideIndex - 1].style.display = "block";
}

function nextImage() {
  let i;
  let slides = document.getElementsByClassName("slideimage");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = slides.length }
  // console.log(slideIndex);
  slides[slideIndex - 1].style.display = "block";
}

