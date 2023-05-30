'use strict';

const score0Element = document.querySelector('#score--0')
const score1Element = document.querySelector('#score--1')
const current0Element = document.querySelector('#current--0')
const current1Element = document.querySelector('#current--1')


const diceElement = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const player0Element = document.querySelector('.player--0')
const player1Element = document.querySelector('.player--1')


let currentScore, activePlayer, isPlaying, totalScores

const initGames = function () {
    score0Element.textContent = 0
    score1Element.textContent = 0
    diceElement.classList.add('hidden')
    current0Element.textContent = 0
    current1Element.textContent = 0
    totalScores = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    isPlaying = true
    player0Element.classList.remove('player--winner')
    player1Element.classList.remove('player--winner')
    player0Element.classList.remove('player--active')
    player1Element.classList.remove('player--active')

    player0Element.classList.add('player--active')
    document.getElementById(`name--0`).textContent = `ИГРОК 1`
    document.getElementById(`name--1`).textContent = `ИГРОК 2`

}


function switchActivePlayer() {
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active')
    player1Element.classList.toggle('player--active')
}

btnRoll.addEventListener('click', function () {
    if (isPlaying) {
        const diceNumber = Math.trunc(Math.random() * 6) + 1

        diceElement.classList.remove('hidden')
        diceElement.src = `dice${diceNumber}.png`
        if (diceNumber !== 1) {
            currentScore += diceNumber
            document.getElementById(`current--${activePlayer}`).textContent = currentScore

        } else {
            switchActivePlayer()

        }
    }


})

btnHold.addEventListener('click', function () {
    if (isPlaying) {
        totalScores[activePlayer] += currentScore

        document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer]

        if (totalScores[activePlayer] >= 20) {
            isPlaying = false
            diceElement.classList.add('hidden')

            document.getElementById(`name--${activePlayer}`).textContent = 'Winner!'
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

        } else {
            switchActivePlayer()
        }
    }
})

btnNew.addEventListener('click', initGames)