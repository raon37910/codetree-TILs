let inputs = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)
let arr = []

for(let elem of inputs) {
    if(elem !== 0) {
        arr.push(elem)
    }
}

let result = ''
while(arr.length !== 0) {
    result += `${arr.pop()} `
}

console.log(result)