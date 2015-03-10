$(document).ready(function(){



	var $window   = $( window ),
		$lastCall = $( ".lastCall" ),
		$dropOff = $('.dropOff');
	
	$(".menuHide").addClass('hide');

	$('#navButton').on( 'mousedown', function( event ){
		$(".menuHide").slideToggle('fast');
	});

	$(".menuHide").on( "mousedown", "a", function( event ){

		var $this = $( this ).attr( "href" );

	   $('html, body').animate({
	       scrollTop: $( $this ).offset().top
	   }, 500);

	   $(".menuHide").slideToggle('fast');

	   event.preventDefault();
	} );

	$window.on( "scroll" , function( e ){

		var $lCtop      = $lastCall.offset().top,
			$wscrollTop = $window.scrollTop(),
			$wnHeight   = $window.height(),
			$val        = $lCtop - $wscrollTop - $wnHeight;

			//console.log ($val);

		if( $val < -10 ){
			$dropOff.css( { 'top' : $val * -0.43 + 'px' } );
		}
	} );





	

	// function parallax() {
	// 	var scrolled = $(window).scrollTop();
	// 	//console.log(scrolled);

	// 	// Change position
	// 	// if ($(window).width() >= 875) {
	// 	//    $('.dropOff').css({'bottom': + -((scrolled-5850) * 0.4) + 'px'});
	// 	// }
	// 	// else if ($(window).width() >= 725) {
	// 	//    $('.dropOff').css({'bottom': + -((scrolled-6050) * 0.4) + 'px'});
	// 	// }
	// 	// else if ($(window).width() >= 650) {
	// 	//    $('.dropOff').css({'bottom': + -((scrolled-6250) * 0.4) + 'px'});
	// 	// }
	// 	// else if ($(window).width() >= 535) {
	// 	//    $('.dropOff').css({'bottom': + -((scrolled-8700) * 0.4) + 'px'});
	// 	// }
	// 	// else if ($(window).width() >= 460) {
	// 	//    $('.dropOff').css({'bottom': + -((scrolled-8900) * 0.4) + 'px'});
	// 	// }
	// 	// else if ($(window).width() >= 406) {
	// 	//    $('.dropOff').css({'bottom': + -((scrolled-9150) * 0.4) + 'px'});
	// 	// }
	// 	// else if ($(window).width() >= 360) {
	// 	//    $('.dropOff').css({'bottom': + -((scrolled-9400) * 0.4) + 'px'});
	// 	// }
	// 	// else {
	// 	//    $('.dropOff').css({'bottom': + -((scrolled-9550) * 0.4) + 'px'});
	// 	// }
	// }


	// $(window).scroll(function(){
	// 	parallax();
	// })

});