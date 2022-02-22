require('./js-component/popup-simple');
require('slick-carousel');

$('.hamburger').on('click', function (event) {
  event.preventDefault();
  $(this).toggleClass('active');
  $('.nav').toggleClass('active');
  $('body').toggleClass('is-modal');
  $('#overlay').toggleClass('active');
});

$('#overlay, .nav__item').on('click', function (event) {
  if ($(window).innerWidth() < 1198) {
    $('.hamburger').removeClass('active');
    $('.nav').removeClass('active');
    $('body').removeClass('is-modal');
    $('#overlay').removeClass('active');
  }
});

$(document).keydown(function (event) {
  if (event.keyCode == 27) {
    $('.hamburger').removeClass('active');
    $('.nav').removeClass('active');
    $('body').removeClass('is-modal');
    $('#overlay').removeClass('active');
  }
});
// 
$(document).ready(function () {
  var vidvideo = document.getElementById("vid__video");
  var vidvideo = vidvideo.getElementsByTagName("iframe")[0].contentWindow;
  $("#play_video").on("click", function () {

    vidvideo.postMessage('{"event": "command", "func": "playVideo", "args": ""}', "*");
    $('.vid__poster').toggleClass('played');
    $('.vid__text').toggleClass('played');
    $('.vid__playbtn').toggleClass('played');
  });
});
// 
$(".slider").slick({
  slidesToShow: 1,
  infinite: true,
  autoplay: false,
  touchThreshold: 100,
  dots: false,
  fade: true,
  speed: 800,
  prevArrow: $(".response__prev"),
  nextArrow: $(".response__next")
});
// 
$(function () {
  $("a[href^='#adv'], a[href^='#response'], a[href^='#prices'], a[href^='#tests']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top - 72 + "px"
    });
    return false;
  });
});
// 
$("#agreement, #agreement-test").click(function () {
  if (($(this).prop("checked"))) {
    $(".button--send").removeAttr("disabled").removeClass("disabled");
  } else {
    $(".button--send").attr("disabled", "disabled").addClass("disabled");
  }
});