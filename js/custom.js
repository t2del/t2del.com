/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */
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

// Function to define innerHTML for HTML table
function show(data) {
    let tab = ``;
    // Loop to access all rows 
    for (let r of data) {
		tab += `
			<div class="col-sm-6 col-md-3 isotope-item notshow web-dev ${r.Active}"> <!-- Box -->
				<div class="image-box">
					<div class="overlay-container">
						<img src="images/${r.Image}" alt="">
						<a class="overlay" data-toggle="modal" data-target="#project-${r.ID}">
							<i class="fa fa-search-plus"></i>
							<span>Web Development</span>
						</a>
					</div>
					<a class="btn btn-default btn-block" data-toggle="modal" data-target="#project-1">${r.Name}</a>
				</div>								
				<!-- Modal -->
				<div class="modal fade" id="project-${r.ID}" tabindex="-1" role="dialog" aria-labelledby="project-1-label" aria-hidden="true">
					<div class="modal-dialog modal-lg">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
								<h4 class="modal-title" id="project-1-label">${r.Name}</h4>
							</div>
							<div class="modal-body">
								<h3>Description</h3>
								<div class="row">
									<div class="col-md-4">
										<p>${r.Description}</p>
										<p>Platform: ${r.Platform}</p>
										
										<a href="${r.Link}" target="_blank">Visit Site</a>
									</div>
									<div class="col-md-8">
										<img src="images/${r.Image}" alt="">
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				<!-- Modal end -->								
			</div> <!-- Box End -->
		`		
    }
    // Setting innerHTML as tab variable
    document.getElementById("portfolio-list").innerHTML = tab;
}
let text =  [
	{"ID": 1, "Name" : "Jinders",  				"Description" : "Front-End and Back-end Development", "Platform" : "Wordpress / Woocommerce", "Image" : "jinders.png", "Link" : "https://www.jinders.com.sg/", "Active" : 'active'},
	{"ID": 2, "Name" : "Spring Brainy Kidz",  	"Description" : "Front-End and Back-end Development", "Platform" : "Wordpress / Woocommerce", "Image" : "sbk.png", "Link" : "https://springbrainykidz.com/", "Active" : 'active'},
	{"ID": 3, "Name" : "Marvid International",  	"Description" : "Front-End and Back-end Development", "Platform" : "OpenCart", "Image" : "marvid.png", "Link" : "https://www.marvid.com.sg/", "Active" : 'active'},
	{"ID": 4, "Name" : "D'Montessori",  			"Description" : "Front-End and Back-end Development", "Platform" : "Wordpress / Woocommerce", "Image" : "dmontessori.png", "Link" : "https://dmontessori.com.sg/" , "Active" : 'active' },
	{"ID": 5, "Name" : "New Peng Hiang",  		"Description" : "Front-End and Back-end Development", "Platform" : "Wordpress / Woocommerce", "Image" : "nph.png", "Link" : "https://www.newpenghiang.com/" , "Active" : 'active' },
	{"ID": 6, "Name" : "Asia Marketplace",  		"Description" : "Front-End and Back-end Development", "Platform" : "OpenCart", "Image" : "asiamarketplace.png", "Link" : "https://www.asiamarketspace.com.sg/" , "Active" : 'active' },
	{"ID": 7, "Name" : "Sis Premium Meats",  	"Description" : "Front-End and Back-end Development", "Platform" : "OpenCart", "Image" : "spm.png", "Link" : "https://www.sispremium.com/" , "Active" : 'active' },
	{"ID": 8, "Name" : "Unique Fine Pearls",  	"Description" : "Front-End and Back-end Development", "Platform" : "OpenCart", "Image" : "ufp.png", "Link" : "https://www.uniquefpgc.com/" , "Active" : 'active' },
	{"ID": 9, "Name" : "Begen",  				"Description" : "Front-End and Back-end Development", "Platform" : "OpenCart", "Image" : "begen.png", "Link" : "https://www.begen.sg/" , "Active" : 'active' },
	{"ID": 10, "Name" : "Sona",  					"Description" : "Front-End and Back-end Development", "Platform" : "OpenCart", "Image" : "sona.png", "Link" : "https://sona.com.sg/" , "Active" : 'active' },
	{"ID": 11, "Name" : "Clovers SG",  			"Description" : "Front-End and Back-end Development", "Platform" : "OpenCart", "Image" : "clovers.png", "Link" : "https://www.clovers.sg/" , "Active" : 'active' },
	{"ID": 12, "Name" : "Novel Communications",  	"Description" : "Front-End and Back-end Development", "Platform" : "OpenCart", "Image" : "novelcomm.png", "Link" : "https://www.novelcomm.com.sg/" , "Active" : 'active' },
	{"ID": 13, "Name" : "Patmos Bible",  			"Description" : "Front-End and Back-end Development", "Platform" : "OpenCart", "Image" : "patmos.png", "Link" : "https://www.georgeannadorai.com.sg/" , "Active" : 'active' },
	{"ID": 14, "Name" : "Stellar Technology",  	"Description" : "Front-End and Back-end Development", "Platform" : "OpenCart", "Image" : "stellar.png", "Link" : "https://www.stellartech.com.sg/" , "Active" : 'active' },
	{"ID": 15, "Name" : "DomesticOne",  			"Description" : "Front-End and Back-end Development", "Platform" : "OpenCart", "Image" : "domestic1.png", "Link" : "https://2021.domestic1.sg/" , "Active" : 'active' },
	{"ID": 16, "Name" : "Shang Antique",  		"Description" : "Front-End and Back-end Development", "Platform" : "OpenCart", "Image" : "shang.png", "Link" : "https://www.shangantique.com.sg/" , "Active" : 'active' },
	{"ID": 17, "Name" : "Test",  		"Description" : "Front-End and Back-end Development", "Platform" : "OpenCart", "Image" : "shang.png", "Link" : "https://www.test.com.sg/" , "Active" : 'hide' },	
];
show(text);



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