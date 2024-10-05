function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function getMaxDayOfMonth(month, year) {
    // console.log(month)
    if(month === 2) {
        return leapYear(year) ? 29 : 28
    }

    if(month === 4 || month === 6 || month === 9 || month === 11) {
        return 30
    }

    return 31
}

function check(day, year, month) {
    let maxDay = getMaxDayOfMonth(month, year)
    // console.log(`${month}월 MAX: ${maxDay}`)
    if(day <= maxDay) return true
    else return false
}

function answer(day, year, month) {
    let answer = ''
    // console.log(`check: ${check(day, year, month)}`)
    if(check(day, year, month)) {
        if(month === 3 || month === 4 || month === 5) {
            answer = 'Spring'
        } else if (month === 6 || month === 7 || month === 8) {
            answer = 'Summer'
        } else if (month === 9 || month === 10 || month === 11) {
            answer = 'Fail'
        } else if(month === 12 || month === 1 || month === 2) {
            answer = 'Winter'
        } else {
            answer = '-1'
        }
    } else {
        answer = '-1'
    }
    return answer
}

let [y, m, d] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
y = 2020
m = 2
d = 1
console.log(answer(d, y, m))