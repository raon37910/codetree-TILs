const fs = require('fs')
let [gender, age] = fs.readFileSync(0).toString().split('\n')

// 남자 = 0, 여자 = 1
gender = Number(gender)
age = Number(age)

if (gender === 0) {
    if(age >= 19) {
        console.log('MAN')
    } else {
        console.log('BOY')
    }
} else {
    if(age >= 19) {
        console.log('WOMAN')
    } else {
        console.log('GIRL')
    }
}