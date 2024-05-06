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
prevArrow: "<img class='slick-prev' src='https://cdn.shopify.com/s/files/1/0871/2844/1112/files/prev.png?v=1714970930'>",
nextArrow: "<img class='slick-next' src='https://cdn.shopify.com/s/files/1/0871/2844/1112/files/next.png?v=1714970930'>",
});

$('.testimonials_wrapper').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  prevArrow: "<img class='slick-prev' src='https://cdn.shopify.com/s/files/1/0871/2844/1112/files/prev.png?v=1714970930'>",
  nextArrow: "<img class='slick-next' src='https://cdn.shopify.com/s/files/1/0871/2844/1112/files/next.png?v=1714970930'>",
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





