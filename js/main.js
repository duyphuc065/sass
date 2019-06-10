
    $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerPadding: '0px',
      asNavFor: '.test__caption',
      prevArrow: '<img class="left-arrow-testimonials" src="./img/lhs-arrow.svg">',
     nextArrow: '<img class="right-arrow-testimonials" src="./img/rhs-arrow.svg">'
  
});
$(".test__caption").slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    asNavFor: '.center'
});