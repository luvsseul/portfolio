'use strict';

const header = document.querySelector('.header');
const headerHeight = header.clientHeight;

document.addEventListener('scroll', () => {
    if (headerHeight < window.scrollY) {
        header.classList.add('header--dark');
    }
    else {
        header.classList.remove('header--dark');
    }
});