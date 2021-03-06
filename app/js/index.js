if ($(".shop__items").length) {
    $(".shop__items").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="shop__arrow shop__arrow_left" src="../img/shop/ellipse-left.png">',
        nextArrow: '<img class="shop__arrow shop__arrow_right" src="../img/shop/ellipse-right.png">'
    });
}
if (document.body.clientWidth<1100){
    if ($(".trainers__wrapper").length) {
        $(".trainers__wrapper").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
    });
}}
if (document.body.clientWidth<1100){
    if ($(".content-section__wrapper").length) {
        $(".content-section__wrapper").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
        });
    }
}
$(".request-call__close").click(function () {
  var t = this;
  $(this).parents(".request-call").removeClass("request-call_active-show");
  $('body').removeClass("fixed");
  setTimeout(function(){
    $(t).parents(".request-call").removeClass("request-call_active");
  }, 300);
});
$(".request-call__bg").click(function () {
  var t = this;
  $(this).parents(".request-call").removeClass("request-call_active-show");
  $('body').removeClass("fixed");
  setTimeout(function(){
    $(t).parents(".request-call").removeClass("request-call_active");
  }, 300);
});


$("#header__menu").change(function() {
  if ($(this).is(':checked')) {
    $('body').addClass("fixed");
  } else {
    $('body').removeClass("fixed");
  }
});

$(".request-call__open").click(function () {
  $(".request-call").addClass("request-call_active");
  $('body').addClass("fixed");
  setTimeout(function(){
    $(".request-call").addClass("request-call_active-show");
  }, 1);
});

//---------------------------------------------------------------------------
$(".info-popup__open").click(function () {
  $(".info-popup").addClass("info-popup_active");
  $('body').addClass("fixed");
  setTimeout(function(){
    $(".info-popup").addClass("info-popup_active-show");
  }, 1);
});
$(".info-popup__close").click(function () {
  var t = this;
  $(this).parents(".info-popup").removeClass("info-popup_active-show");
  $('body').removeClass("fixed");
  setTimeout(function(){
    $(t).parents(".info-popup").removeClass("info-popup_active");
  }, 300);
});
$(".info-popup__bg").click(function () {
  var t = this;
  $(this).parents(".info-popup").removeClass("info-popup_active-show");
  $('body').removeClass("fixed");
  setTimeout(function(){
    $(t).parents(".info-popup").removeClass("info-popup_active");
  }, 300);
});

$(function(){
  if (!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) document.body.classList.add('no-touch');

  if ($(window).scrollTop() > 20){
    $('header').addClass('header_active');
  } else {
    $('header').removeClass('header_active');
  }
  $(window).scroll(function(){
    if ($(this).scrollTop() > 20){
      $('header').addClass('header_active');
    } else {
      $('header').removeClass('header_active');
    }
  });

  // Подсветка активного пункта меню при скроле
  $(window).scroll(function(){
    if ($(this).scrollTop() >= $(".courses").offset().top &&
        $(this).scrollTop() < $(".courses").offset().top + $(".courses").outerHeight()) {
      $(".header__items-item_1").addClass("header__items-item_active");
    } else {
      $(".header__items-item_1").removeClass("header__items-item_active");
    }

    if ($(this).scrollTop() >= $(".trainers").offset().top &&
        $(this).scrollTop() < $(".trainers").offset().top + $(".trainers").outerHeight()) {
      $(".header__items-item_3").addClass("header__items-item_active");
    } else {
      $(".header__items-item_3").removeClass("header__items-item_active");
    }

    if ($(this).scrollTop() >= $(".insta").offset().top &&
        $(this).scrollTop() < $(".insta").offset().top + $(".insta").outerHeight()) {
      $(".header__items-item_4").addClass("header__items-item_active");
    } else {
      $(".header__items-item_4").removeClass("header__items-item_active");
    }

    if ($(this).scrollTop() >= $(".map-city").offset().top &&
        $(this).scrollTop() < $(".map-city").offset().top + $(".insta").outerHeight()) {
      $(".header__items-item_6").addClass("header__items-item_active");
    } else {
      $(".header__items-item_6").removeClass("header__items-item_active");
    }
  });


  // переход к выбраному пункту меню
  $(".header__items-item_1").click(function () {
    $("HTML, BODY").animate({ scrollTop: $(".courses").offset().top + 1 }, 1000);
  });

  $(".header__items-item_3").click(function () {
    $("HTML, BODY").animate({ scrollTop: $(".trainers").offset().top + 1 }, 1000);
  });

  $(".header__items-item_4").click(function () {
    $("HTML, BODY").animate({ scrollTop: $(".insta").offset().top + 1}, 1000);
  });

  $(".header__items-item_6").click(function () {
    $("HTML, BODY").animate({ scrollTop: $(".map-city").offset().top + 1}, 1000);
  });
});
