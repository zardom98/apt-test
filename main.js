document.querySelector('.menu-btn').addEventListener('click', ()=> {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cards',{delay: 500 });
ScrollReveal().reveal('.cards-banner',{delay: 500 });
ScrollReveal().reveal('.social',{delay: 500 });
ScrollReveal().reveal('.footer-links',{delay: 500 });