(function() {

  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 150) {
      $('nav').addClass('active');
    }
    else{
      $('nav').removeClass('active');
    }
  });
})(jQuery);