
var nav = document.getElementById('site-menu');
var header = document.getElementById('top');

window.addEventListener('scroll', function() {
  if (window.scrollY >=400) { // adjust this value based on site structure and header image height
    nav.classList.add('nav-sticky');
    header.classList.add('pt-scroll');
  } else {
    nav.classList.remove('nav-sticky');
    header.classList.remove('pt-scroll');
  }
});

function navToggle() {
        var btn = document.getElementById('menuBtn');
        var nav = document.getElementById('menu');

        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
    };


// 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
 
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});


var swiper = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


