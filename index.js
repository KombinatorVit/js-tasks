function power(pow) {
    return function (num) {
        return num ** pow
    }
}


const power2 = (pow) => (num) => num ** pow

const prices = [[100, 200], [120, 100], [200, 350]]

// const deltaPriceChange = (arr) => {
//     const sumElementArray = arr.map(el => el.reduce((acc, item) => {
//         return item -= acc
//     }, 0)).filter(item => item > 0)
//     console.log(sumElementArray)
//
//     return sumElementArray
//
// }
//
// deltaPriceChange(prices)

// const calculatePriceDelta = (arr) => {
//     const resultArray = []
//
//     for (let itemArray of arr){
//
//         if(itemArray[1]-itemArray[0] > 0){
//             resultArray.push(itemArray[1]-itemArray[0])
//         }
//
//     }
//     console.log(resultArray)
//     return resultArray
//
// }
//
// calculatePriceDelta(prices)
const calculatePriceDeltaM = (arr) => {

    return arr.map(el => el[1] - el[0]).filter(el2 => el2 > 0)
}


console.log(calculatePriceDeltaM(prices))

const arr = [2, 4, 4, 10]

console.log(arr.reduce((acc, item, i) => {
    if (i !== arr.length - 1) {
        return acc += item
    } else {
        return (acc += item) / arr.length
    }


}, 0))


function some(arr2, item) {

    return arr2.find(el => {
        return el === item
    })
}


console.log(some(arr, 4))
const newArr = []

for (let i = 0; i < prices.length; i++) {
    for (let j = 0; j < prices[i].length; j++) {
        newArr.push(prices[i][j])
    }
}


const arr2 = new Array(5).fill(1)

console.log(arr2)


const arr3 = Array.from({length:5}, ()=> 5)

console.log(arr3)