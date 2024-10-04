let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let str = inputs[0]
let numbers = inputs.slice(1)
for(let number of numbers) {
    if(str.length === 1) break
    number = Number(number)
    if(number >= str.length) {
        str = str.slice(0, str.length-1)
    } else {
        str = str.slice(0, number) + str.slice(number+1)
    }
    console.log(str)
}