feather.replace();

// Menu toggle
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('hamburger-active');
})

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function (){
    nav.classList.toggle('slide');
})