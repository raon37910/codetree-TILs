let [n, arr] = require('fs').readFileSync(0).toString().trim().split('\n')
arr = arr.split(' ').map(x => +x)
// console.log(arr)

let firstMax = arr[0] >= arr[1] ? arr[0] : arr[1]
let secondMax = arr[0] >= arr[1] ? arr[1] : arr[0]

for(let i = 2; i < arr.length; i++) {
    if(firstMax < arr[i]) {
        let temp = firstMax
        firstMax = arr[i]
        secondMax = temp
        continue
    }

    if(secondMax < arr[i] && firstMax >= arr[i]) {
        secondMax = arr[i]
    }
}

console.log(firstMax, secondMax)