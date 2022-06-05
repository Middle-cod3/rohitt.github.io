// Offcanvas menu toggle
$(".sub-menu ul").hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

//    Main Slider slick
$(".main__slider").slick({
  infinite: true,
  loop: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  arrows: false,
  fade: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// 2nd rounded carousel swiper design
var swiper = new Swiper(".main__second__slider", {
  slidesPerView: 6,
  spaceBetween: 15,
  slidesPerGroup: 1,
  loop: true,
  speed: 5000,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//    top selling slider



var owl = $(".top__selling__carousel");
owl.owlCarousel({
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  items: 4,
  loop: true,
  center: false,
  rewind: false,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  freeDrag: false,
  margin: 0,
  stagePadding: 0,
  merge: false,
  mergeFit: false,
  autoWidth: false,
  startPosition: 0,
  rtl: false,
  smartSpeed: 2000,
  fluidSpeed: false,
  dragEndSpeed: false,
  responsive: {
    0: {
      items: 1
      // nav: true
    },
    480: {
      items: 2,
      nav: true
    },
    768: {
      items: 3,
      // nav: true,
      loop: true
    },
    992: {
      items: 3,
      // nav: true,
      loop: true
    }
    ,
    1080: {
      items: 4,
      // nav: true,
      loop: true
    }
  },
  responsiveRefreshRate: 200,
  responsiveBaseElement: window,
  fallbackEasing: "swing",
  info: false,
  nestedItemSelector: false,
  itemElement: "div",
  stageElement: "div",
  refreshClass: "owl-refresh",
  loadedClass: "owl-loaded",
  loadingClass: "owl-loading",
  rtlClass: "owl-rtl",
  responsiveClass: "owl-responsive",
  dragClass: "owl-drag",
  itemClass: "owl-item",
  stageClass: "owl-stage",
  stageOuterClass: "owl-stage-outer",
  grabClass: "owl-grab",
  autoHeight: false,
  lazyLoad: false
});

$(".next").click(function () {
  owl.trigger("owl.next");
});
$(".prev").click(function () {
  owl.trigger("owl.prev");
});

$('.card .aFavs').click(function(){
  $(this).parents('.card').toggleClass('esFav');
})
//Producto al carrito
$('.card .alCarrito').click(function(){
  $(this).parents('.card').toggleClass('enCarrito');
})
// Brand slider
var swiper = new Swiper(".brand__slider", {
  slidesPerView: 6,
  spaceBetween: 15,
  slidesPerGroup: 1,
  loop: true,
  speed: 5000,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
