
$(document).ready(function(){

function changeClass(){
    $(this).prev().toggleClass('active')
}
$(function(){
    $('article h2').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
});
$(function(){
    $('article h3').mouseenter(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
});
$(function(){
    $('article h3').mouseleave(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
});

$("input").focus(function(){
    $(this).css("background-color", "pink");
  });
  $("input").blur(function(){
    $(this).css("background-color", "white");
  });



$('h2').css('border','solid 3px pink');
$('h3').css('border','solid 3px Maroon');





})