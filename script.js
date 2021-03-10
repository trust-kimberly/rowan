//change font color on scroll

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() >= $(document).height()) {
        $('body').css("color", "blue");
    } 
   if($(window).scrollTop() + $(window).height() < $(document).height()) {
        $('body').css("color", "white");
    } 
 });

// change project thumbnail image on hover
 
$(document).ready(function(){
    $('#title1').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan1.jpg)");
        $('body').css("background-color", "peachpuff");
        });        
    $('#title2').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan2.jpg)");
        $('body').css("background-color", "aliceblue");
        });
    $('#title3').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan3.jpeg)");
        $('body').css("background-color", "darkcyan");
        });
    $('#title4').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan4.jpg)");
        $('body').css("background-color", "floralwhite");
        });
    $('#title5').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan5.jpg)");
        $('body').css("background-color", "mistyrose");
        });
    $('#title6').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan6.jpg)");
        $('body').css("background-color", "rosybrown");
        });
    $('#title7').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan7.jpg)");
        $('body').css("background-color", "thistle");
        });
    $('#title8').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan8.jpg)");
        $('body').css("background-color", "whitesmoke");
        });
    $('#title9').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan9.jpg)");
        $('body').css("background-color", "teal");
        });
    $('#title10').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan10.jpg)");
        $('body').css("background-color", "plum");
        });
    $('#title11').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan11.jpeg)");
        $('body').css("background-color", "navy");
        });
    $('#title12').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan12.jpg)");
        $('body').css("background-color", "maroon");
        });
    $('#title13').hover(function() {
        $( '.image' ).css("background-image", "url(media/rowan13.jpg)");
        $('body').css("background-color", "darkslategray");
        });				
});
