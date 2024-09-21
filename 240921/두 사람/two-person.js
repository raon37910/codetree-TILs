const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let [age1, gender1] = input[0].split(' ')
let [age2, gender2] = input[1].split(' ')

age1 = Number(age1), age2= Number(age2)

if((age1 >= 19 && gender1 === 'M') || (age2 >= 19 && gender2 === 'M')) {
    console.log(1)
} else {
    console.log(0)
}