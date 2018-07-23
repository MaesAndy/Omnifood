
console.log("connected");
$(document).ready(function() {

  $('.counter').counterUp({
                delay: 10,
                time: 1000
            });


  /* For the sticky navigation */
  $('.js--section-features').waypoint(function(direction) {
      if (direction == "down") {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      }
  }, {
    offset: '60px;'
  });


  /*Scroll to top */

  $('.js--section-features').waypoint(function(direction) {
      if (direction == "down") {
          $('.scrolltop').css('display', 'block');
      }
  }, {
    offset: '60px;'
  });


  /* Scroll on buttons */
  $('.js--scroll-to-plans').click(function () {
     $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });

  $('.js--scroll-to-start').click(function () {
     $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });


  /* navigation */
  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


$('.js--wp--2').waypoint(function(direction){
  $('.js--wp--2').addClass('animated infinite pulse');
}, {offset: '50%'

});

$('.js--wp--1').waypoint(function(direction){
  $('.app-screen').addClass('animated bounceInLeft');
}, {offset: '50%'

});


/* Mobile nav */

$('.js--nav-icon').click(function(){
  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon i');

  nav.slideToggle(200);

  if(icon.hasClass('ion-navicon-round')){
    icon.addClass('ion-ios-close');
    icon.removeClass('ion-navicon-round');
  }
  else{
    icon.addClass('ion-navicon-round');
    icon.removeClass('ion-ios-close');
  }


});

/* MAPS */

var map = new GMaps({
  div: '.map',
  lat: 50.948046,
  lng: 4.702052
});

map.addMarker({
  lat: 50.948046,
  lng: 4.702052,
  title: 'Achterheidestraat 3',
  infoWindow: {
  content: '<p>Our Rotselaar HeadQuarters</p>'
}
});


/* SCROLLTOP */

$(".scrolltop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});




/*Magnific Popup Galery */


$('.meals-showcase').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{enabled:true}

});


$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});











});
