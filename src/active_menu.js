'use strict';

const sectionsId = ['#home', '#about', '#skills', '#work', '#testimonials', '#contact'];
const sectionsMenu = sectionsId.map(id => document.querySelector(`[href="${id}"]`));
const sections = sectionsId.map(id => document.querySelector(id));

const visibleSection = sectionsId.map(() => false);
let activeNavItem = sectionsMenu[0];

const options = {
    rootMargin: '-20% 0px 0px 0px',
    threshold: [0, 0.95]
};
const io = new IntersectionObserver(callback, options);
sections.forEach(section => io.observe(section));
function callback(entries) {
    let selectLastOne;
    entries.forEach(entry => {
        const index = sectionsId.indexOf(`#${entry.target.id}`);
        visibleSection[index] = entry.isIntersecting;
        selectLastOne =
            index === sectionsId.length - 1 &&
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.9;
    });

    const navIndex = selectLastOne ? sectionsId.length - 1 : findFirstIntersecting(visibleSection);
    selectNavItem(navIndex);
};

function findFirstIntersecting(intersections) {
    const index = intersections.indexOf(true);
    return index >= 0 ? index : 0;
};

function selectNavItem(index) {
    const navItem = sectionsMenu[index];
    if (!navItem) return;
    activeNavItem.classList.remove('active');
    activeNavItem = navItem;
    activeNavItem.classList.add('active');
};