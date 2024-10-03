const fs = require('fs')
let [n, arr] = fs.readFileSync(0).toString().trim().split('\n')
arr = arr.split(' ').map(Number)
// arr= [1 ,1 ,2 ,2 ,3 ,4 ,4 ,5 ,5 ,7 ,8 ,3 ,2 ,5]
let answers = []
// let cnt = 0
while(true) {
    let maxIndex = 0
    let lastIndex = answers.length === 0 ? arr.length : answers[answers.length-1]-1

    for(let i = 1; i < lastIndex; i++) {
        if(arr[maxIndex] < arr[i]) {
            maxIndex = i
        }
    }

    answers.push(maxIndex+1)
    // cnt++
    if(maxIndex + 1 === 1) break
    // if(cnt === 4) break
}

console.log(answers.join(' '))