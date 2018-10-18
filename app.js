// navbar on scroll - white

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
      color: 'white'
    });
    $('.navbar-brand').css({
      textTransform: 'capitalize',
      color: 'white'
    });
    $('.menu-a').css({
      color: 'white'
    });
  }
})

//arrow scroll down on click, & navbar change color

$(document).ready(function() {
    $(".arrow-a").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 570 }, "slow");
        navChange();
    });

});

//arrow scroll - animate

$(function() {
  setTimeout('Arrow()');
});

function Arrow() {
  $('.arrow').animate({
    marginBottom: '-=20px'
  }, 800).animate({
    marginBottom: '+=20px'
  }, 800);
  setTimeout('Arrow()', 1600);
};

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


//tablet - scroll


  //picture -- all the way to the top

$(document).ready(function() {
	 $('.content').scrollLeft(200);
});


$('.arrow-top').click(function(){    
    $('.content').animate({
        scrollLeft: 200 //200 ili all the way Left
    }, 1000);
});

$('.arrow-bottom').click(function(){    
    $('.content').animate({
        scrollLeft: 0 // 0 ili all the way Right
    }, 1000);
});





$(document).ready(function() {
    
    //FUNKCII ZA POZADINATA
      function smeniPozadina(){
        $(this).addClass('bg-image-map');
        $(this).css({"color" : "white"});
      }
      function vratiPozadina(){
        $(this).removeClass('bg-image-map');
        $(this).css({"color" : ""});
      }

    //OFF & ON EVENTI ZA POZADINATA NA LAPTOP I MOBILEN
      var alterFunction = function() {
        var ww = document.body.clientWidth;
        if (ww <= 768) {
        $('.thirdHolder').off('mouseover', smeniPozadina);
        $('.thirdHolder').off('mouseout', vratiPozadina);
        } else if (ww >= 769) {
        $('.thirdHolder').on('mouseover', smeniPozadina);
        $('.thirdHolder').on('mouseout', vratiPozadina);
        };
      };
      $(window).resize(function(){
        alterFunction();
      });
      alterFunction();


     //OFF I ON EVENTI ZA TEKSTOT NA LAPTOP I MOBILEN
    $(".none1, .none2, .none3").addClass('none');
    $(".ikona1 , .ikona2, .ikona3").addClass('none')
    var alterClass = function() {
      var mm = document.body.clientWidth;
      if (mm <= 768) {
      $(".ikona1").addClass("block");   
      $(".ikona2").addClass("block");   
      $(".ikona3").addClass("block");   
      $(".more1").click(function () {
            $(".more1").fadeOut("slow",function () {
                 $(".more1").text(($(".more1").text() == 'MORE') ? 'LESS' : 'MORE').fadeIn("slow");
            })
            $(".none1").fadeToggle(1000);
         })
        $(".more2").click(function () {
            $(".more2").fadeOut("slow",function () {
                 $(".more2").text(($(".more2").text() == 'MORE') ? 'LESS' : 'MORE').fadeIn("slow");
            })
            $(".none2").fadeToggle(1000);
         }) 
         $(".more3").click(function () {
            $(".more3").fadeOut("slow",function () {
                 $(".more3").text(($(".more3").text() == 'MORE') ? 'LESS' : 'MORE').fadeIn("slow");
            })
            $(".none3").fadeToggle(1000);
         })   
      } else if (mm >= 769) { 
      $(".thirdHolder1").hover(function(){
        $(".ikona1").show();
        $(".none1").fadeIn(1200)
      }, function() {
        $(".ikona1").hide();
        $(".none1").hide();
      });
      $(".thirdHolder2").hover(function(){
        $(".ikona2").show();
        $(".none2").fadeIn(1200)
      }, function() {
        $(".ikona2").hide();
        $(".none2").hide();
      });
      $(".thirdHolder3").hover(function(){
        $(".ikona3").show();
        $(".none3").fadeIn(1200)
      }, function() {
        $(".ikona3").hide();
        $(".none3").hide();
      });
      $(".more1 , .more2 , .more3").addClass("none")
      };
    };
    $(window).resize(function(){
        alterClass();
    });
     alterClass();

});