function navChange(){
  $('#navbar').css({
      backgroundColor: 'white',
      height: '10.5vh',
      borderBottom: '1px solid lightgrey'
    });
    $('.hamburger').css({
      color: 'black'
    });
    $('.navbar-brand').css({
      textTransform: 'uppercase',
      color: 'black'
    });
    $('.menu-a').css({
      color: 'black'
    });
}

$(document).on('scroll', function(){
  if ($(window).scrollTop() > 0) {
    navChange();
    if (window.matchMedia('(max-width: 768px)').matches)
      {
         $('#navbar').css({
           height: '12vh'
         });
      }
    if (window.matchMedia('(max-width: 425px)').matches)
      {
         $('#navbar').css({
           height: '11.5vh'
         });
      }
  } else  {
    $('#navbar').css({
      backgroundColor: 'transparent',
      borderBottom: '0'
    });
    $('.hamburger').css({
      color: 'black'
    });
    $('.navbar-brand').css({
      textTransform: 'capitalize',
      color: 'black'
    });
    $('.menu-a').css({
      color: 'black'
    });
  }
});

//navbar hamburger menu 

$(document).ready( function(){
    $('body').on('click', '.hamburger', function() {
      $('#myNav').animate({
        display: 'block',
        height: '100%'
      }, 'fast');
  });

  $('body').on('click', '.closebtn', function(){
    $('#myNav').animate({
      display: 'none',
      height: '0%'
    }, 'fast');
  });
});