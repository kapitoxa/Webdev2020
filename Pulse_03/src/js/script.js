$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev-slide.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next-slide.png" alt="next"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false
              }
            },
          ]
      });
});