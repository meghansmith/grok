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
});