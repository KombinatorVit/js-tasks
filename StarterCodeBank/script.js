'use strict';

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
    '.btn--show-modal-window'
);

const openModalWindow = function (e) {
    e.preventDefault()
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
};


btnsOpenModalWindow.forEach(btn => btn.addEventListener('click', openModalWindow));


btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
        closeModalWindow();
    }
});

///


const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth'
    // })
    section1.scrollIntoView({behavior: 'smooth'})
})


// document.querySelectorAll('.nav__link').forEach( (el) =>{
//     console.log(el)
//     el.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         document.querySelector(id ).scrollIntoView({behavior: 'smooth'})
//
//     })
// })

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    }

})

// вкладки

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


tabContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
    if (!clicked) return;
    tabs.forEach(function (tab) {
        tab.classList.remove('operations__tab--active');
    })

    clicked.classList.add('operations__tab--active');

    tabsContent.forEach(function (content) {
        content.classList.remove('operations__content--active');
    })

    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.toggle('operations__content--active')


})


const nav = document.querySelector('.nav');
const siblingLinks = nav.querySelectorAll('.nav__link');
const logo = nav.querySelector('img');
const logoText = nav.querySelector('.nav__text');

nav.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('nav__link')) {
        siblingLinks.forEach((el) => {
            el.style.opacity = 0.5
        });

        logo.style.opacity = 0.4;
        logoText.style.opacity = 0.4;
    }
});

nav.addEventListener('mouseout', function (e) {
    if (e.target.classList.contains('nav__link')) {
        siblingLinks.forEach((el) => {
            el.style.opacity = 1;
        });

        logo.style.opacity = 1;
        logoText.style.opacity = 1;
    }
});

