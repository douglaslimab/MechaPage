const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const navMenu = document.querySelector('#nav-menu');
const hero = document.querySelector('.main');

btnHamburger.addEventListener('click', function(){
    if(btnHamburger.classList.contains('open')){
        body.classList.remove('no-scroll');
        btnHamburger.classList.remove('open');
        navMenu.classList.add('hide-nav-menu');
    }
    else{
        body.classList.add('no-scroll');
        btnHamburger.classList.add('open');
        navMenu.classList.remove('hide-nav-menu');
    }
});

navMenu.addEventListener('click', function(){
    btnHamburger.classList.remove('open');
    body.classList.remove('no-scroll');
    navMenu.classList.add('hide-nav-menu');
});

hero.addEventListener('click', function(){
    btnHamburger.classList.remove('open');
    body.classList.remove('no-scroll');
    navMenu.classList.add('hide-nav-menu');
})