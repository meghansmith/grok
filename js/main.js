$(document).ready(function(){
	
	$(".menuHide").addClass('hide');
	$('#navButton').click(function(){
		$(".menuHide").slideToggle('fast');
	});
	$('#aboutButton').click(function(){
		$(".menuHide").slideToggle('fast');
	});
	$('#whoButton').click(function(){
		$(".menuHide").slideToggle('fast');
	});
	$('#speakersButton').click(function(){
		$(".menuHide").slideToggle('fast');
	});
	$('#scheduleButton').click(function(){
		$(".menuHide").slideToggle('fast');
	});
	$('#sponsorsButton').click(function(){
		$(".menuHide").slideToggle('fast');
	});

	$('a').click(function(){
	   $('html, body').animate({
	       scrollTop: $( $.attr(this, 'href') ).offset().top
	   }, 500);
	   return false;
	});

	function parallax() {
		var scrolled = $(window).scrollTop();
		//console.log(scrolled);

		// Change background position
		//$('.lastCall').css({'background-position': '100% ' + -((scrolled-5400) * .25) + 'px'});

		// Change position
		if ($(window).width() >= 875) {
		   $('.dropOff').css({'bottom': + -((scrolled-5850) * 0.4) + 'px'});
		}
		else if ($(window).width() >= 725) {
		   $('.dropOff').css({'bottom': + -((scrolled-6050) * 0.4) + 'px'});
		}
		else if ($(window).width() >= 650) {
		   $('.dropOff').css({'bottom': + -((scrolled-6250) * 0.4) + 'px'});
		}
		else if ($(window).width() >= 535) {
		   $('.dropOff').css({'bottom': + -((scrolled-8700) * 0.4) + 'px'});
		}
		else if ($(window).width() >= 460) {
		   $('.dropOff').css({'bottom': + -((scrolled-8900) * 0.4) + 'px'});
		}
		else if ($(window).width() >= 406) {
		   $('.dropOff').css({'bottom': + -((scrolled-9150) * 0.4) + 'px'});
		}
		else if ($(window).width() >= 360) {
		   $('.dropOff').css({'bottom': + -((scrolled-9400) * 0.4) + 'px'});
		}
		else {
		   $('.dropOff').css({'bottom': + -((scrolled-9550) * 0.4) + 'px'});
		}
	}


	$(window).scroll(function(){
		parallax();
	})

});