
// Se tuvo que trabajar con JQuery
// !Cuando se aprenda Angular o React vamos a poder cambiar este código
// var carouselWidth = $(".carousel-inner")[0].scrollWidth;
// var cardWidth = $(".carousel-item").width();

// var scrollPosition = 0;

// $(".carousel-control-next").on("click", function () {
//     if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
//       scrollPosition += cardWidth;  //update scroll position
//       $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
//     }
//   });

//   $(".carousel-control-prev").on("click", function () {
//     if (scrollPosition > 0) {
//       scrollPosition -= cardWidth;
//       $(".carousel-inner").animate(
//         { scrollLeft: scrollPosition },
//         600
//       );
//     }
//   });

//   var multipleCardCarousel = document.querySelector(
//     "#carouselExampleControls"
//   );
//   if (window.matchMedia("(min-width: 768px)").matches) {
//     //rest of the code
//     var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//       interval: false
//     });
//   } else {
//     $(multipleCardCarousel).addClass("slide");
//   } 

//   var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//     interval: false,
//     wrap: false,
//   });


  //Libreria de Slick
  $('.responsiveGMG').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
    