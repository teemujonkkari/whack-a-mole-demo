(function($) {

  function randomMole() {
    $moles = $('.mole');
  }

  function showMole() {

  }

  function hideMole() {

  }

  $('.mole').animate({
    top: '-=190'
  }, 500, "linear", function() {
    //
    var $mole = $(this);
    var $img = $mole.find('img');

    var i = 1, round = 0;

    var interval = setInterval(function() {
      $img.attr('src', 'img/sprites/mole_laugh'+i+'.png');
      i = (i > 2) ? 1 : i+1;
    }, 150);

    // hide mole
    setTimeout(function() {
      clearInterval(interval);
      $img.attr('src', 'img/sprites/mole.png');

      $mole.animate({
        top: '+=190'
      }, 500, function() {
        //
      });
    }, 1500);

  });

})(jQuery);
