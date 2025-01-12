let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

document.addEventListener('DOMContentLoaded', function() {
  const slideshowContainer = document.getElementById('slideshow-container');
  if (slideshowContainer) {
    let startX = 0;

    slideshowContainer.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
    });

    slideshowContainer.addEventListener('touchmove', function(e) {
      if (!startX) return;
      let endX = e.touches[0].clientX;
      let diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          plusSlides(1);
        } else {
          plusSlides(-1);
        }
        startX = 0;
      }
    });

    slideshowContainer.addEventListener('touchend', function() {
      startX = 0;
    });
  }
});