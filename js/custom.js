
/*-------------------------------------
Mobile Navigation
-------------------------------------*/
$('.burger, .overlay').click(function(){
  $('.burger').toggleClass('clicked');
  $('.overlay').toggleClass('show');
  $('nav').toggleClass('show');
  $('body').toggleClass('overflow');
});
$('nav li a').click(function(){
  $('.burger').removeClass('clicked');
	$('nav').removeClass('show');
	$('.overlay').removeClass('show');
	$('body').removeClass('overflow');
});




/*--------------------------------------
Header
--------------------------------------*/
var headerHeight = $('#Header').outerHeight();
$(function() {
	$('#Top').css('padding-top', headerHeight);
});

/*--------------------------------------
One Page Navigation
--------------------------------------*/
var headerHeight = $('#Header').outerHeight();
$(function() {
	$('a[href^="#"]').click(function() {
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - headerHeight;
		$("html, body").animate({
			scrollTop: position
		}, 550, "swing");
		return false;
	});
});

/*--------------------------------------
WOW 
--------------------------------------*/
var wow = new WOW({
	mobile: false
});
wow.init();
