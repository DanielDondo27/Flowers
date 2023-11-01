//===============================================================================================================
new Swiper('.slider-hero', {
   //===============================================================================================================
   simulateTouch: true,
   touchation: 2,
   touchAngle: 45,
   grabCursor: true,
   //===============================================================================================================
   keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true
   },
   //===============================================================================================================
   navigation: {
      nextEl: '.slider-teams__button-next',
      prevEl: '.slider-teams__button-prev',
   },
   //===============================================================================================================
   mousewheel: {
      invert: true,
   },
   //===============================================================================================================
   slidesPerView: 3,
   slidesPerGroup: 1,
   //===============================================================================================================
   spaceBetween: 30,
   initialSlide: 1,
   loop: true,
   //===============================================================================================================

   breakpoints: {
      320: {
         //===============================================================================================================
         slidesPerView: 2,
         slidesPerGroup: 1,
         //===============================================================================================================
         spaceBetween: 10,
         initialSlide: 1,
         //===============================================================================================================
      },
      580: {
         //===============================================================================================================
         slidesPerView: 3,
         slidesPerGroup: 1,
         //===============================================================================================================
         spaceBetween: 30,
         initialSlide: 1,
         //===============================================================================================================
      },
   },
});
//===============================================================================================================
new Swiper('.slider-teams', {
   navigation: {
      nextEl: '.slider-teams__button-next',
      prevEl: '.slider-teams__button-prev',
   },
   //===============================================================================================================
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true
   },
   //===============================================================================================================
   simulateTouch: true,
   touchation: 2,
   touchAngle: 45,
   grabCursor: true,
   //===============================================================================================================
   keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true
   },
   //===============================================================================================================
   slidesPerView: 2,
   slidesPerGroup: 2,
   //===============================================================================================================
   spaceBetween: 30,
   initialSlide: 3,
   //===============================================================================================================
   loop: true,
   speed: 1800,
   //===============================================================================================================
   breakpoints: {
      320: {
         slidesPerView: 1,
         slidesPerGroup: 1,
         spaceBetween: 10,
         speed: 500,
      },
      480: {
         slidesPerView: 1,
         slidesPerGroup: 1,
         spaceBetween: 10,
         speed: 1500,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 30,
         slidesPerGroup: 2,
         speed: 1800,
      },
   },
});
//===============================================================================================================
