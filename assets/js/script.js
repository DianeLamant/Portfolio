// let keyboard = "assets/img/002-keyboard-1.svg";
// let computer = "assets/img/003-monitor.svg";
// let time = "assets/img/005-rewind-time.svg"; 
// let phone = "assets/img/006-smartphone.svg";

// let iconesMenu = [keyboard, computer, time, phone];
// let divIcones = document.querySelectorAll(".divIcon");

// divIcones.forEach((element, index) => {
//     var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
//     svg.src = iconesMenu[index];
//     element.appendChild(svg).classList.add("img_menu");
//     var monSVG = document.querySelectorAll(".img_menu");
//     console.log(monSVG);
    
//     monSVG[index].appendChild(keyboard);
    
// });



let imgMenu = document.querySelectorAll(".img_menu");
let textMenu = document.querySelectorAll(".text_menu");


imgMenu.forEach((element, index) => {
    element.addEventListener("mouseover", function() {   
        textMenu[index].style.display = "block";
        textMenu[index].classList.add("slideInRight");
    });
    element.addEventListener("mouseout", function() {   
        textMenu[index].style.display = "none";
        textMenu[index].classList.remove("slideInRight");
    });
});
