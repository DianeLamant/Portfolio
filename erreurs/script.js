var game = $('#game');
var width = game.width();
var height = game.height();
var mouse = $('#mouse');
var mouseWidth = mouse.width();
var mouseHeight = mouse.height();

$(document).ready(function () {
    mouse.click(function () {
        console.log("click");
        $('.tiny.modal')
            .modal('show')
            ;
    })
});


mouse.each(function foo() {

    var intTop = Math.random();
    var intLeft = Math.random();
    var top = ((intTop * height) - mouseWidth) | 0;
    var left = ((intLeft * width) - mouseHeight) | 0;

    $(this).animate({
        left: left,
        top: top
    }, 1000, foo);
});






