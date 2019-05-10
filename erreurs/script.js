var game = $('#game');
var width = game.width();
var height = game.height();
var mouse = $('#mouse');

$(document).ready(function () {
    mouse.click(function () {
        console.log("click");
        $('.tiny.modal')
            .modal('show')
            ;
    })
});


mouse.each(function foo() {

    var top = (Math.random() * height) | 0;
    var left = (Math.random() * width) | 0;

    $(this).animate({
        left: left,
        top: top
    }, 1000, foo);
});






