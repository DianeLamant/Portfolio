// const ScrollReveal = require('scrollreveal');
// import ScrollReveal from 'scrollreveal';
// ScrollReveal().reveal('#projects');


$('.link_menu').each(function (index, element) {
    $(element).click(function () {
        $('html,body').animate({
            scrollTop: section.offset().top
        },
            'slow');
    });
});



let imgMenu = document.querySelectorAll(".img_menu");
let textMenu = document.querySelectorAll(".text_menu");
let linkMenu = document.querySelectorAll(".link_menu");
let toggler = document.querySelector(".toggler");

toggler.addEventListener("click", function () {
    if (toggler.classList.contains("active")) {
        textMenu.forEach((element, index) => {
            element.style.display = "none";
            textMenu[index].classList.remove("slideInLeft");
            toggler.classList.remove("active");
        });
    } else {
        textMenu.forEach((element, index) => {
            element.style.display = "block";
            textMenu[index].classList.add("slideInLeft");
            toggler.classList.add("active");
        });
    };
});

linkMenu.forEach((element, index) => {
    element.addEventListener("click", function () {
        textMenu.forEach((element, index) => {
            element.style.display = "none";
            textMenu[index].classList.remove("slideInLeft");
            toggler.classList.remove("active");
        });
    });
});

imgMenu.forEach((element, index) => {
    element.addEventListener("mouseover", function () {
        textMenu[index].style.display = "block";
        textMenu[index].classList.add("slideInRight");

    });
    element.addEventListener("mouseout", function () {
        textMenu[index].style.display = "none";
        textMenu[index].classList.remove("slideInRight");
    });
});


let circleSkill = document.querySelectorAll(".circleSkill");
let circleActive = document.querySelectorAll(".fa-active");
let textSkill = document.querySelectorAll(".textSkill");

circleSkill.forEach((element, index) => {
    element.addEventListener("mouseover", function () {
        textSkill[index].style.visibility = "visible";
        textSkill[index].classList.add("animated", "fadeInDown");
        circleSkill[index].classList.add("animated", "heartBeat");
    });
    element.addEventListener("mouseout", function () {
        textSkill[index].style.visibility = "hidden";
        textSkill[index].classList.remove("animated", "fadeInDown");
        circleSkill[index].classList.remove("animated", "heartBeat");
    });
});