// JavaScript Document

 var typed = new Typed('.element', {
strings: ["Web Designer.", "Code Developer.", "Apps Designer.","Illustrator.","Graphic Designer."],
typeSpeed:50,
backSpeed:10,
loop:true,
});

$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});

$('.counter').countUp();
