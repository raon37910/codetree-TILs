const fs = require('fs')
let input = fs.readFileSync(0).toString().split('\n')
let [mathA, engA] = input[0].split(' ')
let [mathB, engB] = input[1].split(' ')

mathA = Number(mathA), engA = Number(engA)
mathB = Number(mathB), engB = Number(engB)

if(mathA === mathB) {
    if (engA > engB) {
        console.log('A')
    } else {
        console.log('B')
    }
} {
    if(mathA > mathB) {
        console.log('A')
    } else {
        console.log('B')
    }
}