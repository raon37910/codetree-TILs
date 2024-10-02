function checkPassExam(scores) {
    return scores.reduce((a, b) => a + b, 0) >= 240
}

let students = require('fs').readFileSync(0).toString().split('\n')
students = students.slice(1)
let cnt = 0
for(let scores of students) {
    scores = scores.split(' ').map(Number)
    if(checkPassExam(scores)) {
        console.log('pass')
        cnt++
    } else {
        console.log('fail')
    }
}
console.log(cnt)