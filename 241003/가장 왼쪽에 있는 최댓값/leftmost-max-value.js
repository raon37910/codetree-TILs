const fs = require('fs')
let [n, arr] = fs.readFileSync(0).toString().trim().split('\n')
arr = arr.split(' ').map(Number)
let answers = []

while(true) {
    let maxIndex = 0
    let lastIndex = answers.length === 0 ? arr.length : answers[0]-1

    for(let i = 1; i < lastIndex; i++) {
        if(arr[maxIndex] < arr[i]) {
            maxIndex = i
        }
    }

    answers.push(maxIndex+1)
    if(maxIndex + 1 === 1) break
}

console.log(answers.join(' '))