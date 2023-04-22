'use strict';


let secretNumber = Math.round(Math.random() * 20)
let score = 20
let highScore = 0

const displayGuessMessage = (message) => {
    document.querySelector('.guess-message').textContent = message
}


document.querySelector('.check')
    .addEventListener('click', startGame)
document.querySelector('.again').addEventListener('click', restartGame)


function restartGame() {
    document.querySelector('body').style.background = ''
    document.querySelector('.question').style.width = ''
    document.querySelector('.question').textContent = '???'
    score = 20
    document.querySelector('.score').textContent = score
    displayGuessMessage('Начни угадывать')
    secretNumber = Math.round(Math.random() * 20)
}

function startGame() {
    let guessingNumber = +document.querySelector('.number-input').value
    console.log(typeof guessingNumber)


//no input
    if (!guessingNumber) {
        displayGuessMessage('Input some number!')

        //player win

    } else if (guessingNumber === secretNumber) {
        displayGuessMessage('Yes, this good!!')
        document.querySelector('.question').textContent = secretNumber
        if (score > highScore) {
            highScore = score

        }

        document.querySelector('.highscore').textContent = highScore

        document.querySelector('.number-input').value = ''
        document.querySelector('body').style.background = 'red'
        document.querySelector('.question').style.width = '50rem'

        //Too high
    } else if (guessingNumber !== secretNumber) {
        if (score > 1) {
            displayGuessMessage(guessingNumber > secretNumber ? 'Слишком большое число' : 'Слишком мало')
            score--;
            document.querySelector('.score').textContent = score
            document.querySelector('.number-input').value = ''

        } else {
            document.querySelector('.guess-message').textContent = 'Game over'
            document.querySelector('.score').textContent = 0

        }
    }
}


