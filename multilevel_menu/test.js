function strTest(str){
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}

console.log(strTest('hello'))
console.log(strTest('aba'))


function findShort(str){
    return str.split(' ').sort((a, b) => a.length - b.length)
}

console.log(findShort('hello world a ds')[0])