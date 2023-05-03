const swiperLaunchWithThumb = (elementGallery, elementThumbs) => {
  const swiperThumb = new Swiper(elementGallery, {
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
  });

  const swiperGallery = new Swiper(elementThumbs, {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    thumbs: {
      swiper: swiperThumb,
    },
    keyboard: true,
  });
}

swiperLaunchWithThumb('.js-slider-seams-icons', '.js-slider-seams-card');