//change font color on scroll

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() >= $(document).height()) {
        $( '.image' ).css("background-image", "url(media/rowan-2.jpg)");
        $('body').css("color", "darkslategray");
        $('body').css("background-color", "#d6c2b5");
    } 
   if($(window).scrollTop() + $(window).height() < $(document).height()) {
        $('body').css("color", "white");
    } 
 });

// change project thumbnail image on hover

$(document).ready(function(){
    $('#title-2').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan-2.jpg)");
        $('body').css("color", "darkslategray");
        $('body').css("background-color", "#d6c2b5");
        });   
    $('#title-1').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan-1.jpg)");
        $('body').css("color", "#ff3c00");
        $('body').css("background-color", "black");
        });   
    $('#title0').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan0.jpg)");
        $('body').css("color", "peachpuff");
        $('body').css("background-color", "#e5454c");
        });      
    $('#title1').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan1.jpg)");
        $('body').css("color", "aliceblue");
        $('body').css("background-color", "#aba99c");
        });        
    $('#title2').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan2.jpg)");
        $('body').css("color", "#6f6e60");
        $('body').css("background-color", "#c7ceca");
        });
    $('#title3').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan3.jpeg)");
        $('body').css("color", "#32327d");
        $('body').css("background-color", "whitesmoke");
        });
    $('#title4').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan4.jpg)");
        $('body').css("color", "lavender");
        $('body').css("background-color", "#161f33");
        });
    $('#title5').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan5.jpg)");
        $('body').css("color", "#f1c5b3");
        $('body').css("background-color", "#481603");
        });
    $('#title6').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan6.jpg)");
        $('body').css("color", "whitesmoke");
        $('body').css("background-color", "#b5bbbb");
        });
    $('#title7').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan7.jpg)");
        $('body').css("color", "black");
        $('body').css("background-color", "whitesmoke");
        });
    $('#title8').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan8.jpg)");
        $('body').css("color", "#b7cfd6");
        $('body').css("background-color", "#2b2c26");
        });
    $('#title9').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan9.jpg)");
        $('body').css("color", "#d2c5a7");
        $('body').css("background-color", "#2b2e4c");
        });
    $('#title10').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan10.jpg)");
        $('body').css("color", "#6c8280");
        $('body').css("background-color", "#d6cec1");
        });
    $('#title11').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan11.jpeg)");
        $('body').css("color", "aliceblue");
        $('body').css("background-color", "navy");
        });
    $('#title12').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan12.jpg)");
        $('body').css("background-color", "maroon");
        });
    $('#title13').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan13.jpg)");
        $('body').css("color", "aliceblue");
        $('body').css("background-color", "darkslategray");
        });				
});


// go to slide 
(function () {
    function getSlideParameter(key) {
        key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
        var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
        var slide = match && decodeURIComponent(match[1].replace(/\+/g, " "));
        if (Math.floor(slide) == slide && $.isNumeric(slide))
            return parseInt(slide);
        else
            return 0;//if 'slide' parameter is not present or doesn't have correct values load 0th slide
    }
    $('#carousel-example-generic').carousel(getSlideParameter('slide'));
})();