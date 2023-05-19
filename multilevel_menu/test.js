function strTest(str) {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}

console.log(strTest('hello'))
console.log(strTest('aba'))


function findShort(str) {
    return str.split(' ').sort((a, b) => a.length - b.length)
}

console.log(findShort('hello world a ds')[0])


function toInishials(str) {
    return str.split(' ').map(el => el.slice(0, 1).toUpperCase() + '.').join('')
}

console.log(toInishials('Vit OnO'))

function fibinachi(n) {
    if (n < 0) return 0
    if (n <= 2) return 1
    return fibinachi(n - 1) + fibinachi(n - 2)
}

// console.log(fibinachi(77))


function itFibinachi(n) {
    if (n <= 0) return 0
    if (n <= 2) return 1
    let prev = 1
    let result = 1
    for (let i = 3; i <= n; i++) {
        result = prev + result
        prev = result - prev
    }
    return result
}

console.log(fibinachi(7))


function palindrom(str) {
    str = str.toLowerCase()
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}


function one(callback) {
    return callback ? callback(1) : 1
}

function two(callback) {
    return callback ? callback(2) : 2
}

function three(callback) {
    return callback ? callback(3) : 3
}

function four(callback) {
    return callback ? callback(4) : 4
}

function five(callback) {
    return callback ? callback(5) : 5
}

function six(callback) {
    return callback ? callback(6) : 6
}

function seven(callback) {
    return callback ? callback(7) : 7
}

function eight(callback) {
    return callback ? callback(8) : 8
}

function nine(callback) {
    return callback ? callback(9) : 9
}


function plus(a) {
    return (b) => a + b
}

function minus(a) {
    return (b) => a - b
}

function divide(a) {
    return (b) => b / a
}

function mult(a) {
    return (b) => a * b
}

console.log(one(plus(three()))); // 4
console.log(four(mult(three()))); // 12
console.log(four(divide(two())))