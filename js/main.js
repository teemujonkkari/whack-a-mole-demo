(function($) {

  var interval = null,
    moles = $('.mole');

  pickRandomMole();

  function pickRandomMole() {
    // pick random one and jquerify it
    var $mole = $(_.first(_.shuffle(moles)));
    // show mole
    showMole($mole);
  }

  function animateMole($mole, animation) {

    var i = 1,
      round = 0,
      $img = $mole.find('img');

    clearInterval(interval);

    if (animation === 'smile') {
      interval = setInterval(function() {
        // set frame image
        $img.attr('src', 'img/sprites/mole_laugh' + i + '.png');
        // count rounds
        if (i > 2) { i = 1; round += 1; }
        // new frame
        i++;

        if(round > 1) {
          // stop animation
          clearInterval(interval);
          // set default mole back
          $mole.find('img').attr('src', 'img/sprites/mole.png');
          // unbind smack event
          $mole.unbind('click tap');
          // hide mole
          hideMole($mole);
        }

      }, 150);

    } else if (animation === 'smack') {
      interval = setInterval(function() {
        // set frame image
        $img.attr('src', 'img/sprites/mole_thump' + i + '.png');
        // hide mole after animation
        if (i > 3) {
          // stop animation
          clearInterval(interval);
          // hide mole
          hideMole($mole);

        }
        // show next frame
        i += 1;

      }, 100);
    }
  }

  function showMole($mole) {
    //
    $mole.animate({
      top: '-=190'
    }, 500, 'linear', function() {
      // make mole smile
      animateMole($mole, 'smile');
      // bind smack event
      smackMole($mole);
    });
  }

  function hideMole($mole) {
    $mole.animate({
      top: '+=190'
    }, 500, function() {
      // ready
      // set default mole back
      $mole.find('img').attr('src', 'img/sprites/mole.png');
      // pick a new mole
      pickRandomMole();
    });
  }

  function smackMole($mole) {
    $mole.one('click tap', function(event) {
      //
      $tgt = $(event.target).closest('.mole');
      // smack the mole
      animateMole($mole, 'smack');
    });
  }

})(jQuery);
