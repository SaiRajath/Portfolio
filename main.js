$(document).ready(function(){
let dash = document.querySelector('.dash');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

dash.addEventListener('click', function(){
 mobileNav.classList.add('open');
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});
});
