'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const categoryItems = document.querySelectorAll('.categories__item'),
          leafGreen = document.querySelector('.categories__leaf-green'),
          leafBrown = document.querySelector('.categories__leaf-brown');

    categoryItems.forEach(item => item.addEventListener('mouseenter', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        leafGreen.style.transform = 'translate(' + x * 30 + 'px, ' + y * 30 + 'px)';
        leafBrown.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    }))
})