// 7차이 날때마다 돌아옴
const daysInMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dayPlus = ['Mon','Tue','Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const dayMinus = ['Mon', 'Sun', 'Sat', 'Fri', 'Thu', 'Wed', 'Tue']
function changeToDays(month, day) {
    let ret = 0
    for(let i = 1; i < month; i++) {
        ret += daysInMonths[i]
    }
    return ret + day
}

let [m1, d1, m2, d2] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
let ans = changeToDays(m2, d2) - changeToDays(m1, d1)
console.log(ans >= 0 ? dayPlus[ans % 7] : dayMinus[-ans % 7])