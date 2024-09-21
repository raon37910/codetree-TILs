const fs = require('fs')
let [score1, score2] = fs.readFileSync(0).toString().trim().split(' ')
score1 = Number(score1)
score2 = Number(score2)

if(score1 < 90) {
    console.log(0)
}
else {
    if(score2 >= 95) {
        console.log(100000)
    }
    else if (score2 >= 90) {
        console.log(50000)
    }
    else {
        console.log(0)
    }
}