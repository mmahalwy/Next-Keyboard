(function($) {
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 150) {
      $('nav').addClass('active');
    }
    else{
      $('nav').removeClass('active');
    }
  });

  $('.toggle-modal').click(function() {
    $('#video').attr('src', 'https://www.youtube.com/embed/Dcr-0AOQHts?autoplay=1&rel=0&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fnextkeyboard.co');
  });

  $('#myModal').on('hide.bs.modal', function() {
    $('#video').attr('src', 'https://www.youtube.com/embed/Dcr-0AOQHts?rel=0&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fnextkeyboard.co');
  });
})(jQuery);
