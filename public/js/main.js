console.log("Swiper Astro")


var swiper = new Swiper('.swiper-container', {
  speed: 500,
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },

});