const menuBtn = document.querySelector('.menu-btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const wmenuShadow = document.querySelector('.wmenu--close');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open')
    wmenuShadow.classList.toggle('wmenu--open')
});

menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open')
    wmenuShadow.classList.toggle('wmenu--open')
});
