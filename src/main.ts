let menu       = document.querySelector(".menu")     as HTMLElement;
let menuUl     = document.querySelector(".menu ul")  as HTMLElement;
let menuIcon   = document.querySelector(".menuIcon") as HTMLElement;
let header     = document.querySelector(".header")   as HTMLElement;
let closeBtn   = document.querySelector(".closeBtn") as HTMLElement;
let reservationOrder   = document.querySelector(".reservation-order")  as HTMLElement;
let headOrderButton    = document.querySelector(".head-order-button")  as HTMLElement;
let movementButton     = document.querySelector(".movement-button")    as HTMLElement;

menuIcon.addEventListener("click",() :void => {
    menuUl.classList.toggle('showMenu');
    if(menuUl.classList.contains("showMenu")){
        menu.style.backgroundColor='#222';
    }else{
        menu.style.backgroundColor='transparent';
    }
});

window.onscroll= () :void => {
    if(window.scrollY >= 500){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }

    if(window.scrollY >= 600){
        movementButton.classList.add('showArrow');
    }else{
        movementButton.classList.remove('showArrow');
    }
}

closeBtn.addEventListener("click",() :void =>{
    reservationOrder.classList.toggle("active-page");
});

movementButton.addEventListener("click",() :void =>{
    window.scrollTo ({
        top:0,
        behavior:'smooth'
    });
});

headOrderButton.addEventListener("click",(event:Event) :void =>{
    event.preventDefault();
    reservationOrder.classList.add("active-page");
});