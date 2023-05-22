'use strict'


const modalWindow = document.querySelector('.modal-window')
const overlay = document.querySelector('.overlay')
const btnCloseModalWindow = document.querySelector('.close-modal-window')
const btnsShowModalWindow = document.querySelectorAll('.show-modal-window')


const showModalWindow = function () {
    modalWindow.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const addHiddenClass = function () {
    modalWindow.classList.add('hidden')
    overlay.classList.add('hidden')
}
for (let i = 0; i < btnsShowModalWindow.length; i++) {
    btnsShowModalWindow[i].addEventListener('click', showModalWindow)
}
btnCloseModalWindow.addEventListener('click', addHiddenClass)

overlay.addEventListener('click', addHiddenClass)

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
        addHiddenClass()
    }
})