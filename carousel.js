jQuery(document).ready(function($) {
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


    var sliders = [];
    var delay = 1000;
    var timerId;
    var remaining;
    var start;
    var current_playing;
    // restore user slider img and title or descriptions
    $("#rotate-slider").find("img").each(function() {
        this.className += " slider-hide";
        sliders.push({html: this})
    });
    // initialize the siliders
    function slider_init() {
        $("#rotate-slider").css('display', 'block');
        $("#rotate-slider").append("<div id='slider-btn'><a class='prev-btn'><i class='fa fa-arrow-left' aria-hidden='true'></i> <span class='hidden-xs'>PREV</span<</a><a class='next-btn'><span class='hidden-xs'>NEXT</span> <i class='fa fa-arrow-right' aria-hidden='true'></i></a></div>")
        slider_display(sliders, 0);
        slider_loop(sliders, -1, delay);
    }
    // display 5 img at a time
    function slider_display(A, i) {
        if (i < 0) {
            i = A.length -1;
        }
        current_playing = i;
        // mute the one img before
        A[(i + A.length + 3) % A.length].html.className += " slider-hide";
        // display 5 img after the muted one
        A[(i + A.length) % A.length].html.className = "slider-middle";
        A[(i + A.length - 1) % A.length].html.className = "slider-left-1";
        // A[(i + A.length - 2) % A.length].html.className = "slider-left-2";
        A[(i + A.length + 1) % A.length].html.className = "slider-right-1";
        // A[(i + A.length + 2) % A.length].html.className = "slider-right-2";

    }
    // slider
    function slider_loop(A, i, remaining) {
        start = new Date();
        if (i < 0) {
            i = A.length -1;
        }
    }

    $("body").hover(function() {
        window.clearTimeout(timerId);
        remaining = delay - (new Date() - start);
        $("#slider-btn .prev-btn").click(function() {
            current_playing++;
            slider_display(sliders, current_playing);
        });
        $("#slider-btn .next-btn").click(function() {
            current_playing--;
            slider_display(sliders, current_playing);
        });
    }, function() {
        slider_loop(sliders, current_playing, remaining);
        $("#slider-btn .prev-btn").unbind("click");
        $("#slider-btn .next-btn").unbind("click");
    });

    $('body').mousemove(function(event) {
        if (event.pageX < 400) {
            $('.prev-btn').show();
            $('.next-btn').hide();
        } else if ( event.pageX > 800) {
            $('.prev-btn').hide();
            $('.next-btn').show();
        } else {
            $('.prev-btn').hide();
            $('.next-btn').hide();
        }
    });


    $(window).on('wheel', function(e) {
        e.preventDefault();
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
          //scroll nagore
            current_playing++;
            slider_display(sliders, current_playing);
          }
          else{
            //scroll nadole
            current_playing--;
            slider_display(sliders, current_playing);
          }
      }); 

     slider_init();

 });

