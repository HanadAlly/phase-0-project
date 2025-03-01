 let slideIndex = 0;
 const slides = document.querySelectorAll(".slide");

 function moveSlide(step) {
   slides[slideIndex].style.display = "none";
   slideIndex = (slideIndex + step + slides.length) % slides.length;
   slides[slideIndex].style.display = "block";
 }

 slides.forEach((slide, index) => {
   slide.style.display = index === 0 ? "block" : "none";
 } );