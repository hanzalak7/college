const navSlide =() =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.align');
    const navLink = document.querySelectorAll('.align a');
    const moreLink = document.querySelectorAll('.dropbtn')

    // bring nav in screen
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');


    // Animate links
    navLink.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation=''
        }else{
            link.style.animation = `animateLink 0.5s cubic-bezier(.68,-0.55,.27,1.55) forwards ${index/7 +0.2}s`
        }
    })
    moreLink.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation=''
        }else{
            link.style.animation = `animateLink 0.5s cubic-bezier(.68,-0.55,.27,1.55)  forwards ${index/7 +0.8}s`
        }
    })

        burger.classList.toggle('toggle')
    })
}
navSlide()

// window.onscroll()
// function scrollEffect(scrolledWindow) {
//     window.addEventListener('scroll', function(){
//         if(scrolledWindow>76){
//             let navbar= document.querySelector('.navbar');
//             navbar.classList.toggle('navbar1');
//         }
//     })
// }

// let scrolledWindow = document.pageYOffset;
// scrollEffect(scrolledWindow)

window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}