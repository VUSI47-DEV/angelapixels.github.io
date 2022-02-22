const hamburger = document.getElementById('hamburger')
const navUl = document.getElementById('nav-ul');
const mobileMenu = document.querySelector('.mobile-menu');

const lineOne = document.querySelector('.line-1');
const lineTwo = document.querySelector('.line-2');
const lineThree = document.querySelector('.line-3');


hamburger.addEventListener('click',function(){
    navUl.classList.toggle('show');
    // mobileMenu.classList.toggle('show-me');
    
    lineTwo.classList.toggle('hide');
    lineOne.classList.toggle('line-1-Transform');
    lineThree.classList.toggle('line-3-Transform');

    
});


