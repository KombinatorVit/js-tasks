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

//Sticky navigation

// window.addEventListener('scroll', function (e) {
//     if (window.scrollY > 100) {
//         nav.classList.add('sticky');
//     } else {
//         nav.classList.remove('sticky');
//     }
// })
//Sticky navigation Intersection Observer Api
const header = document.querySelector('.header');

function getStikyNav(entries) {
    console.log(entries)
    const entry = entries[0];
    if (!entry.isIntersecting) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}

const headerObserver = new IntersectionObserver(getStikyNav, {
    root: null,
    threshold: 0,
    rootMargin: '-90px'
})
headerObserver.observe(header)

//появление секция сайта


const allSections = document.querySelectorAll('.section')
const appearanceSections = (entries, observer) => {
    const entry = entries[0]
    if (!entry.isIntersecting) return
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(appearanceSections, {
    root: null,
    threshold: 0.10
})
allSections.forEach(el => {
    sectionObserver.observe(el)
    // el.classList.add('section--hidden')
})

// lazy loading

const lazyImg = document.querySelectorAll('img[data-src]')
console.log(lazyImg)

const loadImages = (entries, observer) => {
    const entry = entries[0]
    if (!entry.isIntersecting) return

    entry.target.src = entry.target.dataset.src
    entry.target.addEventListener('load', () => {
        entry.target.classList.remove('lazy-img')

    })
    observer.unobserve(entry.target)
}

const lazyImagesObserver = new IntersectionObserver(loadImages, {
    root: null,
    threshold: 0.1
})

lazyImg.forEach(el => {
    lazyImagesObserver.observe(el)
})

//slider

const slides = document.querySelectorAll('.slide')
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')
const dotsContainer = document.querySelector('.dots')


let currentSlide = 0
const slidesNumber = slides.length

//код для раработки, чтобы уменьшить картинки
// const slider = document.querySelector('.slider')
// slider.style.transform = 'scale(0.4) translateX(-600px)'
// slider.style.overflow = 'visible'


const moveToSlide = (slide) => {
    slides.forEach((el, index) => el.style.transform = `translateX(${(index - slide) * 100}%)`)
}
moveToSlide(0)

const createDots = () => {
    slides.forEach((_, index) => {
        dotsContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${index}"></button>`)
    })

}
createDots()

const activateCurrentDot = (slide) => {
    document.querySelectorAll(`.dots__dot`).forEach(el => el.classList.remove('dots__dot--active'))
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')


}
activateCurrentDot(0)

const nextSlide = () => {
    if (currentSlide === slidesNumber - 1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    moveToSlide(currentSlide)
    activateCurrentDot(currentSlide)
}

const prevSlide = () => {
    if (currentSlide === 0) {
        currentSlide = slidesNumber - 1
    } else {
        currentSlide--
    }
    moveToSlide(currentSlide)
    activateCurrentDot(currentSlide)

}
btnRight.addEventListener('click', nextSlide)

btnLeft.addEventListener('click', prevSlide)

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide()
    }
    if (e.key === 'ArrowRight') {
        nextSlide()
    }
})

dotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dots__dot')) {
        const slide = e.target.dataset.slide
        moveToSlide(slide)
        activateCurrentDot(slide)
    }
})