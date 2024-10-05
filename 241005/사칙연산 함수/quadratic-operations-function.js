function add(a, b) {
    console.log(`${a} + ${b} = ${a + b}`)
}

function minus(a, b) {
    console.log(`${a} - ${b} = ${a - b}`)
}

function mul(a, b) {
    console.log(`${a} * ${b} = ${a * b}`)
}

function div(a, b) {
    console.log(`${a} / ${b} = ${parseInt(a / b)}`)
}

let [a, o, b] = require('fs').readFileSync(0).toString().trim().split(' ')
a = Number(a)
b = Number(b)

if(o ==='+') {
    add(a, b)
} else if(o === '-') {
    minus(a, b)
} else if(o === '*') {
    mul(a, b)
} else if(o === '/') {
    div(a, b)
} else {
    console.log('False')
}