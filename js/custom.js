/*--------------------------------------
Preloader    
--------------------------------------*/
//document.onreadystatechange = function (e) {
//    if (document.readyState == "interactive") {
//        var all = document.getElementsByTagName("*");
//        for (var i = 0, max = all.length; i < max; i++) {
//            set_ele(all[i]);
//        }
//    }
//}
//
//function check_element(ele) {
//    var all = document.getElementsByTagName("*");
//    var totalele = all.length;
//    var per_inc = 100 / all.length;
//
//    if ($(ele).on()) {
//        var prog_width = per_inc + Number(document.getElementById("progress_width").value);
//        document.getElementById("progress_width").value = prog_width;
//        $("#bar1").animate({width: prog_width + "%"}, 10, function () {
//            if (document.getElementById("bar1").style.width == "100%") {
//                $(".progress").fadeOut();
//                $(".probg").animate({width: "0px"}, 500);
//                $(".logo").delay(100).fadeOut();
//            }
//        });
//    } else {
//        set_ele(ele);
//    }
//}
//
//function set_ele(set_element) {
//    check_element(set_element);
//}


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
Fv Slider
--------------------------------------*/
$('.fv_slider').slick({
	centerMode: true,
    infinite: true,
	centerPadding: '30px',
	//prevArrow: '<div class="slick-prev" aria-label="Previous" type="button"><img src="images/prev-arrow.svg"></div>',
	//nextArrow: '<div class="slick-next" aria-label="Next" type="button"><img src="images/next-arrow.svg"></div>',
	slidesToShow: 3,
	variableWidth: true,
	dots: true,
	autoplay: true,
	autoplaySpeed: 4000,
	cssEase: 'linear',
	speed: 1000,
	pauseOnHover: false,
	loop: true,
	
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
	},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
	}
  ]
});


/*--------------------------------------
Header
--------------------------------------*/
//var headerHeight = $('#header').outerHeight();
//$(window).scroll(function() {    
//    var scroll = $(window).scrollTop();
//
//    if ($(window).scrollTop() > headerHeight) { 
//        $("#header").addClass("fixed");
//		$('#top').css('padding-top', headerHeight);
//		
//    } else {
//        $("#header").removeClass("fixed");
//		$('#top').css('padding-top', '0');
//    }
//});
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
