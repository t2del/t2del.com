/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */

const obeserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.notshow');
hiddenElements.forEach((el) => obeserver.observe(el));


$(document).scroll(function (e) {
    var scrollAmount = $(window).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
    var roundScroll = Math.round(scrollPercent);
    
    // For scrollbar 1
    $(".scrollBar1").css("width", scrollPercent + "%");
    $(".scrollBar1 span").text(roundScroll);
});


document.getElementById("year").innerHTML = new Date().getFullYear();

jQuery(document).ready(function () {
	$().UItoTop({
		easingType: 'easeOutQuint'
	});
});

(function ($) {
	$.fn.UItoTop = function (options) {
		var defaults = {
			text: 'To Top',
			min: 200,
			inDelay: 600,
			outDelay: 400,
			containerID: 'ToTop',
			containerHoverID: 'ToTopHover',
			scrollSpeed: 800,
			easingType: 'linear'
		};
		
		var settings = $.extend(defaults, options);
		var containerIDhash = '#' + settings.containerID;
		var containerHoverIDHash = '#' + settings.containerHoverID;
		$('body').append('<span id="' + settings.containerID + '">' + settings.text + '</span>');
		$(containerIDhash).hide().click(function (event) {
			$('html, body').animate({
				scrollTop: 0
			}, settings.scrollSpeed);
			event.preventDefault();
		})
		.prepend('<span id="' + settings.containerHoverID + '"></span>')
		.hover(function () {
			$(containerHoverIDHash, this).stop().animate({
				'opacity': 1
			}, 600, 'linear');
			}, function () {
			$(containerHoverIDHash, this).stop().animate({
				'opacity': 0
			}, 700, 'linear');
		});
		
		$(window).scroll(function () {
			var sd = $(window).scrollTop();
			if (typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': $(window).scrollTop() + $(window).height() - 50
				});
			}
			if (sd > settings.min)
			$(containerIDhash).fadeIn(settings.inDelay);
			else
			$(containerIDhash).fadeOut(settings.Outdelay);
		});
	};
})(jQuery);

function cl(x) {
	console.log(x);
}