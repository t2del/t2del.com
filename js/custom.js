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


// import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

// const scrollTracker = document.querySelector('.scroll-tracker');
// const scrollTrakingTimeline = new ScrollTimeline({
//     source: document.scrollingElement,
//     orientation: "block",
//     scrollOffsets: [CSS.percent(0), CSS.percent(100)]
// });

// scrollTracker.animate(
//     {
//         transform: ["scaleX(0)", "scaleX(1)"]
//     },
//     {
//         duration: 1,
//         timeiline: scrollTrakingTimeline,
//     }
// );

$(document).scroll(function (e) {
    var scrollAmount = $(window).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
    var roundScroll = Math.round(scrollPercent);
    
    // For scrollbar 1
    $(".scrollBar1").css("width", scrollPercent + "%");
    $(".scrollBar1 span").text(roundScroll);
    
    // // For scrollbar 2
    // $(".scrollBar2").css("height", scrollPercent + "%");
    // $(".scrollBar2 span").text(roundScroll);
});