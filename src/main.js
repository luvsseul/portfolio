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