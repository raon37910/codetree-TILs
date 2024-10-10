const daysInMonths = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dayPlus = ['Mon','Tue','Wed', 'Thu', 'Fri', 'Sat', 'Sun']
let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let [m1, d1, m2, d2] = inputs[0].trim().split(' ').map(Number)
let a = inputs[1]

// console.log(m1, d1, m2, d2)
// console.log(a, dayPlus.indexOf(a))
let cur = dayPlus.indexOf(a)
let cnt = 0

while(true) {
    // console.log(`${m1}:${d1} = ${dayPlus[cur]}`)
    if(dayPlus[cur] === a) {
        cnt++
    }

    if(m1 === m2 && d1 === d2) {
        break
    }

    d1++
    cur = (cur + 1) % 7
    if(d1 > daysInMonths[m1]) {
        d1 = 1
        m1++
    }
}

console.log(cnt)