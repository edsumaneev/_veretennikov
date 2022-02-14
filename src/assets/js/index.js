require('./js-component/popup-simple');

$('.hamburger').on('click', function (event) {
  event.preventDefault();
  $(this).toggleClass('active');
  $('.nav').toggleClass('active');
  $('body').toggleClass('is-modal');
  $('#overlay').toggleClass('active');
});

$('#overlay, .nav__item').on('click', function (event) {
  if ($(window).innerWidth() < 992) {
    $('.hamburger').removeClass('active');
    $('.nav').removeClass('active');
    $('body').removeClass('is-modal');
    $('#overlay').removeClass('active');
  }
});

$(document).keydown(function (eveent) {
  if (event.keyCode == 27) {
    $('.hamburger').removeClass('active');
    $('.nav').removeClass('active');
    $('body').removeClass('is-modal');
    $('#overlay').removeClass('active');
  }
});
// 