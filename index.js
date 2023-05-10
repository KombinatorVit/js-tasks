const game = {
    team1: 'REAL MADRID',
    team2: 'BARCELONA',
    players: [
        [
            'Courtois',
            'Vazquez',
            'Militao',
            'Nacho',
            'Mendy',
            'Casemiro',
            'Valverde',
            'Modrich',
            'Kroos',
            'Vinicius',
            'Benzema',
        ],
        [
            'Stegen',
            'Mingueza',
            'Araujo',
            'Lenglet',
            'Dest',
            'Busquets',
            'Jong',
            'Alba',
            'Messi',
            'Pedri',
            'Dembele',
        ],
    ],
    score: '2:1',
    scored: ['Kroos', 'Benzema', 'Mingueza'],
    date: 'Apr 10th, 2021',
    odds: {
        team1: 1.48,
        draw: 2.53,
        team2: 4.25,
    },
};
const players1 = [
    'Courtois',
    'Vazquez',
    'Militao',
    'Nacho',
    'Mendy',
    'Casemiro',
    'Valverde',
    'Modrich',
    'Kroos',
    'Vinicius',
    'Benzema',
]

const players2 = [
    'Stegen',
    'Mingueza',
    'Araujo',
    'Lenglet',
    'Dest',
    'Busquets',
    'Jong',
    'Alba',
    'Messi',
    'Pedri',
    'Dembele',
]

const goalkeeper = players1[0]
const fieldPlayers = players1.slice(1)
const allPlayers = players1.concat(players2)
const players1Total = players1.concat(['Marselo', 'Isco', 'Asensio', 'Diaz', 'Odriozola'])
const {team1, draw, team2} = game.odds

const printGoals = (...namePlayers) => {

}
console.log(team1, draw, team2)
console.log(goalkeeper)
console.log(fieldPlayers)
console.log(allPlayers)
console.log(players1Total)
// 6. A write function printGoals that takes an arbitrary number of player names (NOT an array) and prints each one to the console along with the total number of goals scored (the number of player names passed to the function).
// 7. The team with the lower odds will win more likely. Print to the console which team is more likely to win, WITHOUT using an if / else or ternary operator.
//     Test data for 6.: First use 'Mingueza', 'Messi', 'Modrich' and 'Nacho' players. Then call the function again with the players from game.scored.

const prom = new Promise((resolve, reject) => {
})


function timeout(sec) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, sec * 1000)
    })
}

// timeout(1).then(()=>{
//     console.log(1)})
// .then(()=>{
//     console.log(2)})


const polindrom = (str) => str === str.toLowerCase().split('').reverse().join('')
console.log(polindrom('aba'))

const num = (num) => {
    return num % 5 === 0 ? 'odd' : 'even'
}

//
// const str = (str) => str.length
// console.log(str('hello'))


const strEvent = (str1) => {


    if (str1[str1.length - 1] ===
        'ь') {
        return str1[str1.length - 2]
    }
    return str1[str1.length - 1]
}
console.log(strEvent('hellь'))