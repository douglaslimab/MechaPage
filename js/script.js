const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('#header');
const hamburgerMenu= document.querySelector('.hamburger_menu');
btnHamburger.addEventListener('click', function(){

    if(btnHamburger.classList.contains('open')){
        body.classList.remove('no-scroll');
        btnHamburger.classList.remove('open');
        header.classList.remove('overlay');
        header.classList.remove('fade-in');
        header.classList.add('fade-out');
        hamburgerMenu.classList.add('has-fade');
    }
    else{
        body.classList.add('no-scroll');
        btnHamburger.classList.add('open');
        header.classList.add('overlay');
        header.classList.remove('fade-out');
        header.classList.add('fade-in');
        hamburgerMenu.classList.remove('has-fade');
    }

});