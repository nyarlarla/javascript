$(function(){
	$('#back').on('click',function(){
		$('body, html').animate({
			scrollTop:0
		}, 800);
		return false;
	});

});