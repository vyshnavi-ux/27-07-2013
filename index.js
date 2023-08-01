
// $(document).ready(function() {
//   const slideDuration = 1000; // Time in milliseconds for each slide
//   const delayBetweenSlides = 1000; // Time in milliseconds between each slide

//   function slideImages() {
//     const $images = $(".img-icon");
//     let index = 0;

//     function showNextImage() {
//       $images.eq(index).addClass("show");
//       index = (index + 1) % $images.length;

//       setTimeout(function() {
//         $images.removeClass("show");
//         showNextImage();
//       }, slideDuration);
//     }

//     showNextImage(); 
//   }
  
//   setTimeout(slideImages, delayBetweenSlides);
// });


document.addEventListener("DOMContentLoaded", function() {
  const slideDuration = 4000; // Time in milliseconds for each slide1
  const delayBetweenSlides = 1000; // Time in milliseconds between each slide
  const images = document.querySelectorAll(".img-icon");
  function slideImages() {
    
    let index = 0;
    
    function showNextImage() {
      images[index].classList.add("show");
      index = (index + 1) % images.length;

      setTimeout(function() {
        images.forEach((image) => image.classList.remove("show"));
        showNextImage();
      }, slideDuration);
    }

    showNextImage(); // Start the sliding animation
  }

  // Start the sliding animation after a delay
  setTimeout(slideImages, delayBetweenSlides);
});
