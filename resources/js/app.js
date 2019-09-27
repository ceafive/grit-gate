$(document).ready(function () {  


//Logic for toggling the menu items from display to hidden
$('.toggle').click(function() {
    $('.nav').slideToggle(200);  
    });
    
});


//Logic for changing navigation icon when on mobile view (choosing with svg to display)
const icon = document.getElementsByClassName("icon");
const nav = document.getElementsByClassName("nav");
const toggle = document.getElementsByClassName("toggle");


toggle[0].addEventListener("click", function(){ 
    if(nav[0].style.display === "none" || nav[0].style.display === ""){
        icon[0].classList.add("hidden");
        icon[0].classList.remove("block");
        icon[1].classList.add("block");
        icon[1].classList.remove("hidden");
    } else {
        icon[0].classList.add("block");
        icon[0].classList.remove("hidden");
        icon[1].classList.add("hidden");
        icon[1].classList.remove("block");
    }
});


// Owl carousel control for clients list on About page https://owlcarousel2.github.io

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
             nav:false
        },
        1000:{
            items:6,
             nav:true,
             loop:false
        }
    }
})

