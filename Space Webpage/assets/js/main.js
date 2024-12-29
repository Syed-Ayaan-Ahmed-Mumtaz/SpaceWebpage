/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>){
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>){}
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    //Add a class if the bottom offset is greater than 50 of the viewport height
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}

/*=============== SWIPER PLANETS ===============*/ 
const swiperTravel = new Swiper('.travel swiper', {
   loop: true,
   spaceBetween: '32',
   grabCursor: true,
   slidesPerView: 'auto',
   centeredSlides: 'auto',

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
        600:{
            slidesPerView: 2,
        },
        900:{
            slidesPerView: 3,
        },
    }
  
  });
  
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

