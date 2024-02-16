const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button_active",
    clickable: true,
  },
  navigation: {
    nextEl: ".procedures-section__carousel-button.next",
    prevEl: ".procedures-section__carousel-button.prev",
  },
});
