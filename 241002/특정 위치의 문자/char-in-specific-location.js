let input = require('fs').readFileSync(0).toString().trim()
let arr = ['L', 'E', 'B', 'R', 'O', 'S']

let index = -1

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === input) {
        index = i
    }
}

console.log(index === -1 ? 'None' : index)