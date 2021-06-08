$('.banner-slider').slick({
  dots: false,
  arrows: true,
  fade: true,
  speed: 2000,
  autoplay: true,
  infinite: true,
  prevArrow: "<i class='fas fa-arrow-circle-left prevslid'></i>",
  nextArrow: "<i class='fas fa-arrow-circle-right nextslid'></i>",
});
$('.port-slider').slick({
  arrows: false,
  autoplay: true,
  infinite: true,
  slidesToShow: 4,
  // autoplaySpeed: 2000,
});
$('.venobox').venobox();

$('.service-slider').slick({
  slidesToShow: 3,
  vertical: true,
  prevArrow: "<i class='fa fa-chevron-up prevslid2'></i>",
  nextArrow: "<i class='fa fa-chevron-down nextslid2'></i>",
  centerMode: true,
  centerPadding: "0",
});
// TESTI PART SLIDER
$('.img-slider').slick({
  slidesToShow: 3,
  vertical: true,
  prevArrow: "<i class='fa fa-chevron-up prevslid3'></i>",
  nextArrow: "<i class='fa fa-chevron-down nextslid3'></i>",
  centerMode: true,
  centerPadding: "0",
  asNavFor: '.txt-slider',
});

// TESTI IMG SLIDER
$('.txt-slider').slick({
  arrows: false,
  fade: true,
  asNavFor: '.img-slider',
});

// COUNTER UP
$('.counter').counterUp({
    delay: 10,
    time: 2000
});

// MAKING A STICKY NAVBAR
$(function(){
var navbar = $('.header-inner');
$(window).scroll(function(){
  if($(window).scrollTop() <=40){
    navbar.removeClass('navbar-scroll');
  }else{
    navbar.addClass('navbar-scroll');
  }
});
});

$('nav a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});
