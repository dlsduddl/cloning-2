// top-bar 메가메뉴
$(".banner-menu-box > ul > li").mouseenter(function(){
  $(".top-bar-bg").addClass("active2");
});

$(".top-bar-bg").mouseleave(function(){
  $(".top-bar-bg").removeClass("active2");
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',새로로 할때
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
