'use strict';


const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectBox = document.querySelector('.projects');
categories.addEventListener('click', (e) => {
    const targetCategory = e.target.dataset.category;
    if (targetCategory == null) {
        return;
    }
    handleActiveSelection(e.target);
    filterProjects(targetCategory);
});

function handleActiveSelection(target) {
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
};

function filterProjects(targetCategory) {
    projectBox.classList.add('anim-out');
    projects.forEach(e => {
        if (targetCategory === 'all' || targetCategory === e.dataset.type) {
            e.style.display = "block";
        }
        else {
            e.style.display = "none";
        }
    });
    setTimeout(() => {
        projectBox.classList.remove('anim-out');
    }, 250)
};