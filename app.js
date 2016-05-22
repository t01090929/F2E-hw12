var main = function() {
  $('#icon1').click(function() {
    var currentSlide = $('.display_slide');
    var targetSlide = $('#slide1');
    currentSlide.fadeOut(600);
    targetSlide.fadeIn(600);
    currentSlide.removeClass('display_slide');
    currentSlide.addClass('idle_slide');
    targetSlide.removeClass('idle_slide');
    targetSlide.addClass('display_slide');
  });

  $('#icon2').click(function() {
    var currentSlide = $('.display_slide');
    var targetSlide = $('#slide2');
    currentSlide.fadeOut(600);
    targetSlide.fadeIn(600);
    currentSlide.removeClass('display_slide');
    currentSlide.addClass('idle_slide');
    targetSlide.removeClass('idle_slide');
    targetSlide.addClass('display_slide');
  });

  $('#icon3').click(function() {
    var currentSlide = $('.display_slide');
    var targetSlide = $('#slide3');
    currentSlide.fadeOut(600);
    targetSlide.fadeIn(600);
    currentSlide.removeClass('display_slide');
    currentSlide.addClass('idle_slide');
    targetSlide.removeClass('idle_slide');
    targetSlide.addClass('display_slide');
  });

  $('#icon4').click(function() {
    var currentSlide = $('.display_slide');
    var targetSlide = $('#slide4');
    currentSlide.fadeOut(600);
    targetSlide.fadeIn(600);
    currentSlide.removeClass('display_slide');
    currentSlide.addClass('idle_slide');
    targetSlide.removeClass('idle_slide');
    targetSlide.addClass('display_slide');
  });

  $('#icon5').click(function() {
    var currentSlide = $('.display_slide');
    var targetSlide = $('#slide5');
    currentSlide.fadeOut(600);
    targetSlide.fadeIn(600);
    currentSlide.removeClass('display_slide');
    currentSlide.addClass('idle_slide');
    targetSlide.removeClass('idle_slide');
    targetSlide.addClass('display_slide');
  });

  //___________________________________________________________________//
  $('#title1').click(function() {
    var currentTitle = $('.display_slide_title');
    var targetTitle = $('#title2');

    targetTitle.animate({left:"150px"}, 2000);

    currentTitle.removeClass('display_slide_title');
    currentTitle.addClass('slide_title');
    targetTitle.removeClass('slide_title');
    targetTitle.addClass('display_slide_title');
  });
  $('#title2').click(function() {
    var currentTitle = $('.display_slide_title');
    var targetTitle = $('#title3');

    targetTitle.animate({left:"150px"}, 2000);

    currentTitle.removeClass('display_slide_title');
    currentTitle.addClass('slide_title');
    targetTitle.removeClass('slide_title');
    targetTitle.addClass('display_slide_title');
  });
  $('#title3').click(function() {
    var currentTitle = $('.display_slide_title');
    var targetTitle = $('#title1');

    targetTitle.animate({left:"150px"}, 2000);

    currentTitle.removeClass('display_slide_title');
    currentTitle.addClass('slide_title');
    targetTitle.removeClass('slide_title');
    targetTitle.addClass('display_slide_title');
  });
};

$(document).ready(main);
