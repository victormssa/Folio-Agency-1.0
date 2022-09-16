const buttonMenu1 = document.querySelector('.header__button--menu');
const buttonMenu2 = document.querySelector('.menu__button--exit');
const header = document.querySelector('.header')
const menu = document.querySelector('.menu');

buttonMenu1.addEventListener('click', () => {
    menu.classList.add('menu__active')
});

buttonMenu2.addEventListener('click', () => {
    menu.classList.remove('menu__active')
});