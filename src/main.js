'use strict';

const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

//헤더영역 스크롤 되며 다크닝하기
document.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    }
    else {
        header.classList.remove('header--dark');
    }
});

//홈영역 스크롤되며 투명도 키우기

const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//하단 화살표 홈영역 이후 표시하기
const homeHalfHeight = home.offsetHeight / 2;
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
    if (window.scrollY > homeHalfHeight) {
        arrowUp.style.opacity = 1;
    }
    else {
        arrowUp.style.opacity = 0;
    }
});


const headerToggle = document.querySelector('.header__toggle');
const headerMenu = document.querySelector('.header__menu');
// 토클버튼 클릭시 메뉴 보여주기
headerToggle.addEventListener('click', () => {
    headerMenu.classList.toggle('open');
});

// 메뉴 아이템 클릭시 메뉴 닫기
headerMenu.addEventListener('click', () => {
    headerMenu.classList.remove('open');
});