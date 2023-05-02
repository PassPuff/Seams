const swiperThumb = new Swiper(".js-slider-seams-icons", {
  spaceBetween: 2,
  slidesOffsetBefore: 20,
  slidesOffsetAfter: 20,
  slidesPerView: 6,
  centeredSlides: false,
  //autoScrollOffset: 2,
  //loop: true,
  freeMode: false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

const swiperGallery = new Swiper(".js-slider-seams-card", {
  spaceBetween: 0,
  //loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiperThumb
  },
  keyboard: true,
});