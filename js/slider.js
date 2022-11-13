$(document).ready(function(){
    
    $('.custom_foto').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 20000000,
        adaptiveHaight: true,
        arrows: true,
        
        prevArrow: '<button type="button" class="slick-prev arrow-back bg-arrow"><img src="../img/icon/up-arrow.svg"></button>',
        nextArrow:'<button type="button" class="slick-next arrow-next bg-arrow"><img src="../img/icon/up-arrow.svg"></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              rows: 1,
              slidesToShow: 3,
              slidesToScroll: 1
            },
            breakpoint: 400,
            settings: {
              rows: 1,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
})
