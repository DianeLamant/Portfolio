let imgMenu = document.querySelectorAll(".img_menu");
let textMenu = document.querySelectorAll(".text_menu");


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