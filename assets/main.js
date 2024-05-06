$(document).ready(function () {
 
  $('.testimonial_slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $(".slide_controls .slide-prev"),
    nextArrow: $(".slide_controls .slide-next")
  });

$('.features_cars .row').slick({
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
prevArrow: "<img class='slick-prev' src='assets/img/prev.png'>",
nextArrow: "<img class='slick-next' src='assets/img/next.png'>",
});

$('.testimonials_wrapper').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  prevArrow: "<img class='slick-prev' src='assets/img/prev.png'>",
  nextArrow: "<img class='slick-next' src='assets/img/next.png'>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});





