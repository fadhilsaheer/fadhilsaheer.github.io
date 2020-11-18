/*
Author : Fadhil
Instagram : __fadhil_m_
*/ 


//navbbar
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

let sidenavItem_a = document.getElementById("side-a")
let sidenavItem_b = document.getElementById("side-b")
let sidenavItem_c = document.getElementById("side-c")

sidenavItem_a.addEventListener('click', ()=>{
    closeNav()
})
sidenavItem_b.addEventListener('click', ()=>{
    closeNav()
})
sidenavItem_c.addEventListener('click', ()=>{
    closeNav()
})

//typing effect

function textEffect(){
    var effects = ["#2ECC71", "#3498DB", "#E74C3C", "#F4D03F", "#FDFEFE"]
    let index = Math.floor(Math.random() * effects.length)
    let span = document.getElementById("animate")
    span.style.textShadow = `0 0 24px ${effects[index]}`

}

document.getElementById("animate").addEventListener("change", textEffect())


var typed = new Typed('.animate', {
    strings: ['Web Developer', 'App Developer','Youtuber', 'Content Creator'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

//initializing AOS
AOS.init();



//loader
$(window).on("load", ()=>{
    $(".loader").fadeOut()
    $(".main").fadeIn()
})

