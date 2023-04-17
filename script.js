'use strict';


const eventHandler = function () {
    const guessingNumber = +document.querySelector('.number-input').value
    console.log(typeof guessingNumber)

    if (!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Input some number!'
    }

}

document.querySelector('.check')
    .addEventListener('click', eventHandler)