$(function(){
			if (window.matchMedia('(max-width: 768px)').matches)
			{
			    $('.img-boja').css({
					bottom : '-10px',
					height : '278px'
				});
			}
			if (window.matchMedia('(max-width: 1440px)').matches)
			{
			    $('.img-boja').css({
			    	bottom : '-30px',
			    	height : '316px'
			    });
			}
			if (window.matchMedia('(max-width: 425px)').matches)
			{
			    $('.img-boja').css({
					bottom : '-10px',
					height : '278px',
					width: '252px'
				});
			}
			$('.branding').css({
			    backgroundColor: '#37afd4',
			    color: 'white'
			});
			$('#service-nav').focus();
			$('#ul-glavno2').hide();
			$('#ul-glavno3').hide();
			$('.branding').on('click', function() {
		        $('#ul-glavno1').show();
		        $('#ul-glavno2').hide();
				$('#ul-glavno3').hide();
				$('.branding').css({
			    	backgroundColor: '#37afd4',
			    	color: 'white'
			    });
			    $('.marketing, .coding').css({
			    	backgroundColor: 'transparent',
			    	color: 'black'
			    });
				if (window.matchMedia('(max-width: 1440px)').matches)
				{
				    $('.img-boja').css({
				    	bottom : '-30px',
				    	height : '316px'
				    });
				}
				if (window.matchMedia('(max-width: 768px)').matches)
				{
				    $('.img-boja').css({
						bottom : '-10px',
						height : '278px',
						width : '312px'
					});
				}
				if (window.matchMedia('(max-width: 425px)').matches)
				{
				    $('.img-boja').css({
						bottom : '-10px',
						height : '278px',
						width: '252px'
					});
				}
			});

			$('.marketing').on('click', function() {
		        $('#ul-glavno2').show();
		        $('#ul-glavno1').hide();
				$('#ul-glavno3').hide();
				$('.marketing').css({
			    	backgroundColor: '#37afd4',
			    	color: 'white'
			    });
			    $('.branding, .coding').css({
			    	backgroundColor: 'transparent',
			    	color: 'black'
			    });
				if (window.matchMedia('(max-width: 1440px)').matches)
				{
				    $('.img-boja').css({
			    	bottom : '-14px',
			    	height : '324px',
			    	width: '637px'
			    	});
				}
				 if (window.matchMedia('(max-width: 768px)').matches)
				 {
				    $('.img-boja').css({
						bottom : '-10px',
						height : '281px',
						width : '408px'
					});
				 }
				if (window.matchMedia('(max-width: 425px)').matches)
				{
				    $('.img-boja').css({
						bottom : '-10px',
						height: '268px',
    					width: '325px'
					});
				}
			});

			$('.coding').on('click', function() {
		        $('#ul-glavno3').show();
		        $('#ul-glavno1').hide();
				$('#ul-glavno2').hide();
				$('.coding').css({
			    	backgroundColor: '#37afd4',
			    	color: 'white'
			    });
			    $('.branding, .marketing').css({
			    	backgroundColor: 'transparent',
			    	color: 'black'
			    });		    
				if (window.matchMedia('(max-width: 1440px)').matches)
				{
				    $('.img-boja').css({
			    	bottom : '-40px',
			    	height: '308px'
			    	});
				}
				if (window.matchMedia('(max-width: 768px)').matches)
				{
				    $('.img-boja').css({
						bottom : '-10px',
						height : '229px',
						width : '378px'
					});
				}
				if (window.matchMedia('(max-width: 425px)').matches)
				{
				    $('.img-boja').css({
						bottom : '-10px',
						height: '229px',
    					width: '327px'
					});
				}
			});

			// flag = 0;
			$(window).on('wheel', function(e) {
				e.preventDefault();
				if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
					//scroll nagore
			       if ($('#ul-glavno2').is(':visible')) {
			    		$('.branding').trigger('click');
			    	} else if ($('#ul-glavno1').is(':visible')) {
			    		$('.coding').trigger('click');
			    	} else {
			    		$('.marketing').trigger('click');
			    	}
			    }
			    else{
			    	//scroll nadole
			    	if ($('#ul-glavno2').is(':visible')) {
			    		$('.coding').trigger('click');
			    	} else if ($('#ul-glavno3').is(':visible')) {
			    		$('.branding').trigger('click');
			    	} else {
			    		$('.marketing').trigger('click');
			    	}
			    }
			});	

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
					
		});